import './Themes.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function Themes() {
     return (
          <aside>

               <h2 className='category'>CATEGORIAS</h2>
               <div className='d-grid gap-2'>

                    <Link to={"/celebrities"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Celebrities</Button>
                    </Link>

                    <Link to={"/premieres"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Premieres</Button>
                    </Link>

                    <Link to={"/oscars2024"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Oscars 2024</Button>
                    </Link>

                    <Link to={"/reviews"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Reviews</Button>
                    </Link>

                    <Link to={"/ranking"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Ranking</Button>
                    </Link>

                    <Link to={"/festivals"}>
                         <Button className='btn_themes' variant="primary" size="lg" >Film Festivals</Button>
                    </Link>
               </div>



          </aside>
     )
}



