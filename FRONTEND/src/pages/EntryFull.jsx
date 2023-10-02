import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useEntry from '../hooks/useEntryFull';




const API_URL = import.meta.env.VITE_API_URL_BACKEND;


function EntryFull() {
    const { id } = useParams();
    const { news, loading, error } = useEntry(id);
    const { results, user } = news;



    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return <>
        <NewsArticleFull>

            <p className="title">{results[0].new_title}</p>
            <img src={`${API_URL}/${results[0].new_pic}`} alt="Imagen de Entrada" />
            <p className="entrance">{results[0].new_entrance}</p>
            <p className="text">{results[0].new_text}</p>
            <button>Trailer</button>

            <p className="author">Autor de la entrada: {user[0].user_name}</p>
            <p className="date">Publicación hecha el {new Date(results[0].created_at).toLocaleDateString()}</p>

        </NewsArticleFull>

    </>

};
//! TAMAÑO IMAGEN CARTEL PELICULA 486PX x 720PX

const NewsArticleFull = styled.article`
    border: 2px solid black;
    position: relative;
    display: flex;    
    align-items: flex-start;  
    justify-content: flex-start;
    height: 720px;
    p{
        margin: 10px;
    }
    
    .text{
        border: 2px solid black;
        width: 500px;
    }
    img {
        margin-top: 100px;
        
        width: 300px;
        

    }
`;



export default EntryFull