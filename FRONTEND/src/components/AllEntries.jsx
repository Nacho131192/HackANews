import { Entry } from './Entry';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function AllEntries({ news }) {

    return news.length ? (
        <NewsSection>

            {news.map((news) => (

                <section key={news.id}>
                    <Entry news={news} />
                </section>

            ))}

        </NewsSection>
    ) : (
        <p>No hay entradas</p>
    );
};



const NewsSection = styled.section`
display: flex;
flex-direction: row;

gap: 1rem;
`;
