import { Entry } from "./Entry";

import Spinner from 'react-bootstrap/Spinner';
import './AllEntries.css';

export default function AllEntries({ news }) {

  const newArray = news.slice(0, 6);

  return news.length ? (
    <section className='mapeo-array'>
      {newArray.map((news) => (
        <article key={news.id}>
          <Entry news={news} />
        </article>
      ))}
    </section>
  ) : (
    <div className='no-news'>
      <Spinner animation="grow" variant="danger" />
      No hay entradas
      <Spinner animation="grow" variant="danger" />
    </div>
  );
}




// slice o splice