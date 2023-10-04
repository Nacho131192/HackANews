import styled from 'styled-components';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from 'react-router-dom';
import './Entry.css';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
import Likes from './Likes';

export const Entry = ({ news }) => {
    const { user } = useContext(LoginContext);
    return (
        <>
            <Link to={`/entries/${news.id}`} style={{ textDecoration: 'none' }}>
                <NewsArticle>
                    {news.new_pic && (
                        <img src={`${API_URL}/${news.new_pic}`} alt="Entrada" />
                    )}
                    <p className="title">{news.new_title}</p>

                    <p className="author">
                        {news.user_name} -{' '}
                        {new Date(news.created_at).toLocaleDateString()}
                    </p>

                </NewsArticle>
            </Link>
            <div>
                {user && <Likes newsId={news.id} />}
                <p className="likes">• {news.new_likes}💚 •</p>
            </div>
        </>
    );
};

const NewsArticle = styled.article`
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 200px;

    * {
        margin: 0px;
    }

    .title {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }
    .author {
        margin-top: 0.5rem;
    }
    img {
        margin-top: 0px;
        width: 200px;
    }
`;
