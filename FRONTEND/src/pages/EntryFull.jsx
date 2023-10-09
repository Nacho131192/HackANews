import { useParams } from 'react-router-dom';
import useEntry from '../hooks/useEntryFull';
import EditDeleteEntry from '../components/EditDeleteEntry';
import { useLogin } from '../hooks/useLogin';
import Spinner from 'react-bootstrap/Spinner';
import Likes from '../components/Likes';
import './EntryFull.css';


const API_URL = import.meta.env.VITE_API_URL_BACKEND;


function EntryFull() {
    

    const { user: usercontext } = useLogin()
    
    const { id } = useParams();
    const { news, loading, error } = useEntry(id);
    const { results, user } = news;

    

    if (loading) return <> 
        <Spinner animation="border" /> 
        <p>Cargando...</p> 
    </>;
    
    if (error) return <p>{error}</p>;



    return (
        <>
            <article className='fullEntry'>
                <p className="title">{results[0].new_title}</p>
                <img
                    className="pic"
                    src={`${API_URL}/${results[0].new_pic}`}
                    alt="Imagen de Entrada"
                />
                <p className="entrance">{results[0].new_entrance}</p>
                <p className="text">{results[0].new_text}</p>
                <p className="theme">Tema: {results[0].new_theme}</p>
                {/* <video
                    className="video"
                    src={`${API_URL}/${results[0].new_video}`}
                    width="100%"
                    type="video/mp4"
                    autoPlay
                    muted
                    controls
                ></video> */}
                <p>
                    {usercontext ? (
                        <Likes newsId={id} newsLike={results[0].new_likes} />
                    ) : (
                        <div className="likes">Likes: {results[0].new_likes}💚</div>
                    )}
                </p>

                <p className="author">
                    Autor de la entrada: {user[0].user_name}
                </p>
                <p className="date">
                    Publicación hecha el{' '}
                    {new Date(results[0].created_at).toLocaleDateString()}
                </p>
                {usercontext && usercontext.user_email == user[0].user_email ? (
                    <EditDeleteEntry results={results} />
                ) : null}
            </article>
        </>
    );


};





export default EntryFull