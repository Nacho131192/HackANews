import styled from 'styled-components';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from "react-router-dom";



export const Entry = ({ news }) => {

    return <Link to={`/entries/${news.id}`} style={{ textDecoration: "none" }}>
        <NewsArticle>

            <img src={`${API_URL}/${news.new_pic}`} alt="Entrada" />
            <p className='title'>{news.new_title}</p>
            <p className='likes'>• {news.new_likes}💚 •</p>
            <p className='author'>{news.user_name} - {new Date(news.created_at).toLocaleDateString()}</p>


        </NewsArticle>
    </Link>
};


const NewsArticle = styled.article`
   
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 400px;
    width: 200px;
    

    *{margin: 0px;
        }
  
    .title{
        font-size: 16px;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
        background-color: #5a5aff;
        
    }
    .author{
        margin-top: 0.5rem;
    }
    img {
        margin-top: 0px;
        width: 200px;
    }
`;
