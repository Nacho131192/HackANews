import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';
import Carousel from '../components/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    const { news, loading, error } = useEntries();

    if (loading)
        return (
            <>
                <Spinner animation="border" />
                <p>Cargando...</p>
            </>
        );
    if (error) return <p>{error}</p>;
    // const newsRating = news.Sorted((x, y) => {
    //   return y.new_likes - x.new_likes;

    // });

    return (
        <>
            <section>
                <h2>ULTIMOS ESTRENOS</h2>
                <br />
                <Carousel />
                <br />
            </section>
            <section>
                <h2>ÚLTIMAS NOTICIAS</h2>
                <Link to="/entries/rating"><h3>mejor valoradas</h3></Link>
                <br />
                <AllEntries news={news} />
                <br />
            </section>
        </>
    );
}