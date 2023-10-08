import { useContext, useState } from 'react';
import likesButtomService from '../services/likesButtomService';
import { LoginContext } from '../context/LoginContext';

import Button from 'react-bootstrap/Button';


export default function Likes({ newsId }) {
    const { token } = useContext(LoginContext);
    const [error, setError] = useState();
    const handleLike = async (newsId) => {

        try {
            await likesButtomService(newsId, token);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <p>{newsId}</p>
            <Button className='like' variant="secondary" onClick={() => { handleLike(newsId) }}>LIKE</Button>
        </div>
    );

}

