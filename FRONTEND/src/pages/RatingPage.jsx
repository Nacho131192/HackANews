import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';
import { Link } from 'react-router-dom';

import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function RatingPage() {
    const { news, loading, error } = useEntries();
    const newsRating = news.toSorted((x, y) => {
        return y.new_likes - x.new_likes;
    });

    return (
        <>
            <section>
                <h2>MEJOR VALORADAS</h2>
                <Link to="/">
                    <FontAwesomeIcon
                        className="narrowButton"
                        icon={faArrowLeft}
                        size="2x"
                    />
                </Link>
                <AllEntries news={newsRating} />
            </section>
        </>
    );
}
