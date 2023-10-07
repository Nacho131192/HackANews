
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from 'react-router-dom';
import './Entry.css';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
import Likes from './Likes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLogin } from '../hooks/useLogin'





export const Entry = ({ news }) => {
    const { user } = useLogin() 
    return (
        <>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${API_URL}/${news.new_pic}`} />
      <Card.Body>
      <Card.Title>{news.new_title}</Card.Title>
      <Card.Text>
        {news.new_entrance}
      </Card.Text>
      <Link to={`/entries/${news.id}`} ><Button variant="primary">Ver Entrada</Button></Link>
      </Card.Body>
        <div>
            {user && <Likes newsId={news.id} />}
            <div className="likes">• {news.new_likes}💚 •</div>
        </div>
  </Card>
        </>
    );
};


    



