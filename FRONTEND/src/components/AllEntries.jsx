import { Entry } from './Entry';
import styled from 'styled-components';

export default function AllEntries({ news }) {
    const newArray = news.slice(0, 5);

    return news.length ? (
        <NewsSection>
            {newArray.map((news) => (
                <section key={news.id}>
                    <Entry news={news} />
                </section>
            ))}
        </NewsSection>
    ) : (
        <p>No hay entradas</p>
    );
}

const NewsSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

// slice o splice
