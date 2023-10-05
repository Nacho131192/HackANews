import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllEntries from '../components/AllEntries';

function CategoriesPage() {
    const API_URL = import.meta.env.VITE_API_URL_BACKEND;
    const categories = {
        celebrities: {
            title: 'Celebrities',
            id: 1,
        },
        premieres: {
            title: 'Premieres',
            id: 2,
        },
        oscars2024: {
            title: 'Oscars 2024',
            id: 3,
        },
        reviews: {
            title: 'Reviews',
            id: 4,
        },
        ranking: {
            title: 'Ranking',
            id: 5,
        },
        festivals: {
            title: 'Film Festivals',
            id: 6,
        },
    };

    let { categoryId } = useParams();
    const [data, setData] = useState([]);
    const targetId = categories[categoryId].id;

    console.log(targetId);

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
