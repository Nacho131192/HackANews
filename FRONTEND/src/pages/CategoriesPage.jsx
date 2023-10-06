import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllEntries from '../components/AllEntries';

function CategoriesPage() {
    const API_URL = import.meta.env.VITE_API_URL_BACKEND;

    let { categoryId } = useParams();
    const [data, setData] = useState([]);
    const targetId = categoryId;

    useEffect(() => {
        fetch(`${API_URL}/entries/themes/${targetId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Se ha producido un error');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const filteredData = data.data.entry;
                console.log(filteredData);
                setData(filteredData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [targetId]);

    return (
        <div>
            <AllEntries news={data} />
        </div>
    );
}

export default CategoriesPage;
