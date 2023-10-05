import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';
import Carousel from '../components/Carousel';
import Spinner from 'react-bootstrap/Spinner';

export default function HomePage() {
    const { news, loading, error } = useEntries();

    if (loading) return <p><Spinner animation="border" />Cargando...</p>;
    if (error) return <p>{error}</p>;



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
                <br />
                <AllEntries news={news} />
                <br />
            </section>
        </>

    )
}