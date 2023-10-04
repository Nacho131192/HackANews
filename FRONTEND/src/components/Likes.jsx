import { useContext, useState } from 'react';
import likesButtomService from '../services/likesButtomService';
import { LoginContext } from '../context/LoginContext';


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
            <button onClick={() => { handleLike(newsId) }}>LIKE</button>
        </div>
    );

}