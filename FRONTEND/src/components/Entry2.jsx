const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import { Link } from 'react-router-dom';
import './Entry2.css';
import Likes from './Likes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLogin } from '../hooks/useLogin';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Entry2 = ({ news }) => {
    const { user } = useLogin();
    return (
        <>
            <Card className="entry" style={{ width: '13rem' }}>
                <Card>
                    <Card.Img
                        variant="top"
                        src={`${API_URL}/${news.new_pic}`}
                    />
                    <Card.Body>
                        <Card.Title>{news.new_title}</Card.Title>
                        <Card.Text>{news.new_entrance}</Card.Text>
                        <Link to={`/entries/${news.id}`}>
                            <Button className="btn_to_new" variant="secondary">
                                Ver Entrada
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>

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
