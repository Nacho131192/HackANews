import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllEntries from '../components/AllEntries';
import UsePageNumber from '../hooks/usePageNumber';

import './CategoriesPage.css'
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
                const filteredData = data.data.entry;
                setData(filteredData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [targetId]);

    const { initPage, endPage, setInitPage, setEndPage } = UsePageNumber(6);

    const newsArray = data.slice(initPage, endPage);

    return (
        <div>
            <div className='buttons-container'>
                <button
                    onClick={() => {
                        setInitPage(initPage - 6);
                        setEndPage(endPage - 6);
                        if (initPage <= 0) {
                            setInitPage(0), setEndPage(6);
                        }

                        console.log(initPage, endPage);
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                        if (endPage <= newsArray.length) {
                            setInitPage(initPage + 6);
                            setEndPage(endPage + 6);
                        }
                        console.log(initPage, endPage);
                    }}
                >
                    Next
                </button>
            </div>

            <div>
                <AllEntries news={newsArray} />
            </div>
        </div>
    );
}

export default CategoriesPage;
