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

    return <NewsArticle>

        <img src={`${API_URL}/${results[0].new_pic}`} alt="Imagen de Entrada" />
        <p>{results[0].new_title}</p>
        <p>{results[0].new_entrance}</p>
        <p>{results[0].new_text}</p>
        <button>Trailer</button>

        <p> Creado por {user[0].user_name} el {new Date(results[0].created_at).toLocaleDateString()}</p>

    </NewsArticle>

};

const NewsArticle = styled.article`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;    

    

    img {
      
    }
`;



export default EntryFull