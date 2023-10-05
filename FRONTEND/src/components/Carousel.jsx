import Carousel from 'react-bootstrap/Carousel';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;
import './Carousel.css';

function UncontrolledExample() {
    
  return (
    <div className="carousel">
    <Carousel>
      <Carousel.Item>
        <img className="img_carousel" src={`${API_URL}/fastX.jpg`} text="First slide" />
        <Carousel.Caption>
          <h3>FAST X</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={`${API_URL}/pesadillas.jpg`} text="Second slide" />
        <Carousel.Caption>
          <h3>PESADILLAS ANTES DE NAVIDAD</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={`${API_URL}/mulan.jpg`} text="Third slide" />
        <Carousel.Caption>
          <h3>MULAN</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;



