const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from 'react-router-dom';
import './Entry.css';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';
import Likes from './Likes';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useLogin } from '../hooks/useLogin';

export const Entry = ({ news }) => {
    const { user } = useLogin();
    return (
        <>
            <Card className="entry" style={{ width: '18rem' }}>
                <Card.Img
                    className="imgCard1"
                    variant="top"
                    src={`${API_URL}/${news.new_pic}`}
                />
                <Card.Body>
                    <Card.Title className="title">{news.new_title}</Card.Title>

                    <hr className="linea" />
                    <Card.Text className="text_card1">
                        {news.new_entrance}
                    </Card.Text>
                    <Link to={`/entries/${news.id}`}>
                        <Button className="btn_to_new" variant="secondary">
                            Ver Entrada
                        </Button>
                    </Link>
                </Card.Body>
                <div className="btn_like">
                    {/* {user ? (
                        <Likes newsId={news.id} newsLike={news.new_likes} />
                    ) : (
                        <div className="likes-yes">{news.new_likes}❤️</div>
                    )} */}
                    {user && (
                        <div className="btn-like-user">
                            {' '}
                            <Likes newsId={news.id} newsLike={news.new_likes} />
                            <div className="likes-yes">
                                {news.new_likes}❤️
                            </div>{' '}
                        </div>
                    )}
                    {!user && (
                        <div className="likes-non">{news.new_likes}❤️</div>
                    )}
                </div>
            </Card>
        </>
    );
};
