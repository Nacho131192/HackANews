import { Entry } from './Entry';

export default function AllEntries({ news }) {

    return news.length ? (
        <ul>

            {news.map((news) => (
                <li key={news.id}>
                    <Entry news={news} />
                </li>
            ))}

        </ul>
    ) : (
        <p>No hay entradas</p>
    );
}; 
