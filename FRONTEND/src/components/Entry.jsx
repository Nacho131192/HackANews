import styled from 'styled-components';


export const Entry = ({ news }) => {

    return <NewsArticle>

        <img src={`http://localhost:3000/${news.new_pic}`} alt="Entrada" />
        <p>{news.new_title}</p>

        <p> Creado por {news.user_name} el {new Date(news.created_at).toLocaleDateString()}</p>

    </NewsArticle>

};


const NewsArticle = styled.article`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 250px;
    width: 100px;
    

    img {
        
    }
`;
