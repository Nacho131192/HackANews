import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useEntry from '../hooks/useEntryFull';

import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';


const API_URL = import.meta.env.VITE_API_URL_BACKEND;


function EntryFull() {
    const { id } = useParams();
    const { news, loading, error } = useEntry(id);
    const { results, user } = news;



    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return <NewsArticleFull>

        <img src={`${API_URL}/${results[0].new_pic}`} alt="Imagen de Entrada" />
        <p>{results[0].new_title}</p>
        <p>{results[0].new_entrance}</p>
        <p>{results[0].new_text}</p>
        <button>Trailer</button>

        <p>Autor de la entrada: {user[0].user_name}</p>
        <p>Publicación hecha el {new Date(results[0].created_at).toLocaleDateString()}</p>

    </NewsArticleFull>

};

const NewsArticleFull = styled.article`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
    
    
    p{
        border: 2px solid black;
    }
    img {
      
    }
`;



export default EntryFull