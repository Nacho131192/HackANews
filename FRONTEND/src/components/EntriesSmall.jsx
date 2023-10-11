import { Entry2 } from './Entry2';
import Spinner from 'react-bootstrap/Spinner';
import './EntriesSmall.css';
import useEntries from '../hooks/useEntries';

export default function EntriesSmall() {
    const { news } = useEntries();

    const newArray = news.slice(0, 4);

    return news.length ? (
        <section className="mapeo-array">
            {newArray.map((news) => (
                <article key={news.id}>
                    <Entry2 news={news} />
                </article>
            ))}
        </section>
    ) : (
        <div className="no-news">
            <Spinner animation="grow" variant="danger" />
            No hay entradas
            <Spinner animation="grow" variant="danger" />
        </div>
    );
}
