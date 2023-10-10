import { useParams } from 'react-router-dom';
import useEntry from '../hooks/useEntryFull';
import EditDeleteEntry from '../components/EditDeleteEntry';
import { useLogin } from '../hooks/useLogin';
import Spinner from 'react-bootstrap/Spinner';
import Likes from '../components/Likes';
import './EntryFull.css';

const API_URL = import.meta.env.VITE_API_URL_BACKEND;

function EntryFull() {
    const { user: usercontext } = useLogin();

    const { id } = useParams();
    const { news, loading, error } = useEntry(id);
    const { results, user } = news;

    if (loading)
        return (
            <>
                <Spinner animation="border" />
                <p>Cargando...</p>
            </>
        );

    if (error) return <p>{error}</p>;

    return (
        <>
            <article className="fullEntry">
                <p className="title-entry-full">{results[0].new_title}</p>

                <div className="principal">
                    <div className="columna1">
                        <a
                            href={`${API_URL}/${results[0].new_pic}`}
                            target="_blank"
                        >
                            <img
                                className="pic-full-entry"
                                src={`${API_URL}/${results[0].new_pic}`}
                                alt="Imagen de Entrada"
                            />
                        </a>
                        <p className="theme">Tema: {results[0].new_theme}</p>
                        <p className="author">
                            Autor de la entrada: {user[0].user_name}
                        </p>
                        <p className="date">
                            Publicación hecha el{' '}
                            {new Date(
                                results[0].created_at
                            ).toLocaleDateString()}
                        </p>

                        <div>
                            {results[0].new_video ? <video /> : <div></div>}
                        </div>
                    </div>

                    <div className="columna2">
                        <p className="entrance">{results[0].new_entrance}</p>
                        <p className="text">{results[0].new_text}</p>
                    </div>
                </div>

                <p>
                    {usercontext ? (
                        <Likes newsId={id} newsLike={results[0].new_likes} />
                    ) : (
                        <div className="likes">
                            Likes: {results[0].new_likes}💚
                        </div>
                    )}
                </p>

                {usercontext && usercontext.user_email == user[0].user_email ? (
                    <EditDeleteEntry results={results} />
                ) : null}
            </article>
        </>
    );
}

{
    /* <video
                    className="video"
                    src={`${API_URL}/${results[0].new_video}`}
                    width="100%"
                    type="video/mp4"
                    autoPlay
                    muted
                    controls
                ></video> */
}

export default EntryFull;
