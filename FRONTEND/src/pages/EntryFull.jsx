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
            <img className="pic" src={`${API_URL}/${results[0].new_pic}`} alt="Imagen de Entrada" />
            <p className="entrance">{results[0].new_entrance}</p>
            <p className="text">{results[0].new_text}</p>
            <p className="theme">Tema: {results[0].new_theme}</p>
            <video className="video" src={`${API_URL}/${results[0].new_video}`} width="100%" type="video/mp4" autoPlay muted controls></video>

            <p className="author">Autor de la entrada: {user[0].user_name}</p>
            <p className="date">Publicación hecha el {new Date(results[0].created_at).toLocaleDateString()}</p>

        </NewsArticleFull>

    </>

};
//! TAMAÑO IMAGEN CARTEL PELICULA 486PX x 720PX

const NewsArticleFull = styled.article`
    width: 1000px;
    
    border-radius: 10px;
    background-color: aliceblue;
    display: grid; 
    grid-template-columns: 0.7fr 1.3fr 1fr; 
    grid-template-rows: 0.5fr 0.7fr 1.8fr 0.6fr 1.7fr 0.7fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "title title title"
    "pic entrance entrance"
    "pic text text"
    "pic text text"
    "theme video video"
    ". author author";
    * {padding: 10px;}
    padding: 10px;
    .title { grid-area: title;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;}
    .pic { grid-area: pic;
        width: 400px;
    max-width: 400px;}
    .entrance { grid-area: entrance; }
    .text { grid-area: text; }
    .video { grid-area: video; }
    .theme { grid-area: theme; }
    .author { grid-area: author; }
    .date{ grid-area: author;
        text-align: end;}
        
`;



export default EntryFull