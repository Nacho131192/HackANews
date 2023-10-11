import useEntries from '../hooks/useEntries';
import AllEntries from '../components/AllEntries';
import Carousel from '../components/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import './HomePage.css';

import UsePageNumber from '../hooks/usePageNumber';
import { useEffect, useState } from 'react';
import PageButton from '../components/PageButtons';


export default function HomePage() {
    const { news, loading, error } = useEntries();

    // Funcion que controla las paginas
    const { initPage, endPage, setInitPage, setEndPage } = UsePageNumber(6);

    const newsArray = news.slice(initPage, endPage);

    if (loading)
        return (
            <>
                <Spinner animation="border" />
                <p>Cargando...</p>
            </>
        );
    if (error) return <p>{error}</p>;

    return (
        <>
            <section>
                <h2>NOTICIAS TOP</h2>
                <br />
                <Carousel />
                <br />
            </section>
            <hr className="line-HP"></hr>
            <section>
                <h2>ÚLTIMAS NOTICIAS</h2>


                <button
                    onClick={() => {
                        setInitPage(initPage - 6);
                        setEndPage(endPage - 6);
                        if (initPage <= 0) {
                            setInitPage(0), setEndPage(6);
                        }

                        console.log(initPage, endPage);
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                        if (endPage <= news.length) {
                            setInitPage(initPage + 6);
                            setEndPage(endPage + 6);
                        }
                        console.log(initPage, endPage);
                    }}
                >
                    Next
                </button>


                <Link to="/entries/rating">
                    <h3>mejor valoradas</h3>
                </Link>
                <br />
                <AllEntries news={newsArray} />
                <br />
            </section>
        </>
    );
}
