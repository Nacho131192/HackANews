import styled from 'styled-components';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from "react-router-dom";


export const Entry = ({ news }) => {

    return <Link to={`/entries/${news.id}`}>
        <NewsArticle>

            <img src={`${API_URL}/${news.new_pic}`} alt="Entrada" />
            <p>{news.new_title}</p>

            <p> Creado por {news.user_name} el {new Date(news.created_at).toLocaleDateString()}</p>

        </NewsArticle>
    </Link>
};


const NewsArticle = styled.article`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 400px;
    width: 200px;
    

    img {
        margin-top: 0px;
        width: 200px;
    }
`;
