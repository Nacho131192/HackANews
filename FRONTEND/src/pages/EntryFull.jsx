import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useEntry from '../hooks/useEntryFull';


const API_URL = import.meta.env.VITE_API_URL_BACKEND;


function EntryFull() {
    const { id } = useParams();
    const { news, loading, error } = useEntry(id);


    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    console.log(id);
    return <NewsArticle>

        <img src={`${API_URL}/${news.new_pic}`} alt="Imagen de Entrada" />
        <p>{news.new_title}</p>
        <p>{news.new_entrance}</p>
        <p>{news.new_text}</p>
        <p>{news.themes_themes_id}</p>

        <p> Creado por {news.user_name} el {new Date(news.created_at).toLocaleDateString()}</p>

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