import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';


export default function HomePage() {
    const { news, loading, error } = useEntries();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;



    return (

        <>
            <section>
                <h2>MEJORES VALORACIONES</h2>
                <br />
                <AllEntries news={news} />
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