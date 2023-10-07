import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { likesButtomService, likesStatusService } from '../services/entriesServices';


export default function Likes({ newsId }) {
    const { token } = useContext(LoginContext);
   
    //Estado del boton like
    const {initialLike, setInitialLike} = useState(false)
    const [error, setError] = useState("");
    const {loading, setLoading} = useState(false);
    console.log(initialLike);
    
    useEffect(() => {
        const loadStatus = async () => {
            try {
                setLoading(true);
                const data = await likesStatusService(newsId, token);
                setInitialLike(data);
            } catch (error) {
                setError(error)
            }
        }
        loadStatus()
    },[])
    
   
    // Cuando hace like
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