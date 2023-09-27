import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';


export default function HomePage() {
    const { news, loading, error } = useEntries();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;



    return (
        <section>
            <h2>Contenido de pagina principal</h2>
            <AllEntries news={news} />
        </section>
    )
}