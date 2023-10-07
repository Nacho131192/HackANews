import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Themes.css';
import Button from 'react-bootstrap/Button';

export default function Themes() {
    const API_URL = import.meta.env.VITE_API_URL_BACKEND;
    const [fetchedCategories, setFetchedCategories] = useState([]);

    useEffect(() => {
        let results = {};
        fetch(`${API_URL}/entries/themes`)
            .then((response) => response.json())
            .then((data) => {
                results = data.data.map((obj) => {
                    let hash = {};
                    hash['name'] = obj.theme_name;
                    hash['id'] = obj.themes_id;
                    return hash;
                });
                setFetchedCategories(results);
            });
    }, []);

    return (
        <aside>
            <h2 className="category">CATEGORIAS</h2>
            <ul className="nav2">
                {fetchedCategories.map((category) => {
                    return (
                        <Link to={`/themes/${category.id}`} key={category.id}>
                            <Button className='btn_themes' variant="primary" size="lg" >
                              <li>
                                {category.name}
                              </li>
                            </Button>
                        </Link>
                    );
                })}
            </ul>
        </aside>
    );
}

