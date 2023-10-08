
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from 'react-router-dom';
import './Entry.css';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
import Likes from './Likes';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import LikeZone from './LikeZone';
import { useLogin } from '../hooks/useLogin'





export const Entry = ({ news }) => {
    const { user } = useLogin() 
    return (
        <>
  <Card className="entry" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${API_URL}/${news.new_pic}`} />
      <Card.Body>
      <Card.Title className='title'>{news.new_title}</Card.Title>
      <Card.Text>
        {news.new_entrance}
      </Card.Text>
      <Link to={`/entries/${news.id}`} ><Button variant="secondary">Ver Entrada</Button></Link>
          <div className="likes"> {news.new_likes}❤️​ </div>
          <Likes /> 
      </Card.Body>

  </Card>
            
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${API_URL}/${news.new_pic}`} />
      <Card.Body>
        <Card.Title>{news.new_title}</Card.Title>
        <Card.Text>
          {news.new_entrance}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

        </>
    );
};


    



