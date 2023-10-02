import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;

const Counter = () => {
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {

        axios.get(`${API_URL}/viewlikes/${entryId}`)
            .then((response) => {

                setLikesCount(response.data.likes);
            })
            .catch((error) => {
                console.error("Error al obtener los likes:", error);
            });
    }, []);

    return (
        <div>
            <p>{likesCount} LIKES</p>
        </div>
    );
}

export default Counter;