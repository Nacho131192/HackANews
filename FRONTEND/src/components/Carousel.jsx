import Carousel from 'react-bootstrap/Carousel';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import './Carousel.css';
import { Link } from 'react-router-dom';
import useEntries from '../hooks/useEntries';

function UncontrolledExample() {
    const { news } = useEntries();

    const newsRating = news.toSorted((x, y) => {
        return y.new_likes - x.new_likes;
    });
    const threeTopNews = newsRating.slice(0, 3);

    return (
        <div className="carousel">
            {threeTopNews.length != 0 && (
                <Carousel>
                    <Carousel.Item>
                        <Link to={`/entries/${threeTopNews[0].id}`}>
                            {' '}
                            <img
                                className="img_carousel"
                                src={`${API_URL}/${threeTopNews[0].new_pic}`}
                                text="First slide"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>{threeTopNews[0].new_title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={`/entries/${threeTopNews[1].id}`}>
                            <img
                                className="img_carousel"
                                src={`${API_URL}/${threeTopNews[1].new_pic}`}
                                text="Second slide"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>{threeTopNews[1].new_title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={`/entries/${threeTopNews[2].id}`}>
                            <img
                                className="img_carousel"
                                src={`${API_URL}/${threeTopNews[2].new_pic}`}
                                text="Third slide"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>{threeTopNews[2].new_title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )}
        </div>
    );
}

export default UncontrolledExample;
