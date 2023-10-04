import './Themes.css';
import { Link } from "react-router-dom";


export default function Themes() {
     return (
          <aside>

               <h2 className='category'>CATEGORIAS</h2>
               <ul className='nav2'>

                    <Link to={"/celebrities"}>
                         <li><button className='btn_themes'>Celebrities</button></li>
                    </Link>

                    <Link to={"/premieres"}>
                         <li><button className='btn_themes'>Premieres</button></li>
                    </Link>

                    <Link to={"/oscars2024"}>
                         <li><button className='btn_themes'>Oscars 2024</button></li>
                    </Link>

                    <Link to={"/reviews"}>
                         <li><button className='btn_themes'>Reviews</button></li>
                    </Link>

                    <Link to={"/ranking"}>
                         <li><button className='btn_themes'>Ranking</button></li>
                    </Link>

                    <Link to={"/festivals"}>
                         <li><button className='btn_themes'>Film Festivals</button></li>
                    </Link>
               </ul>



          </aside>
     )
}




/*export default function Aside() {
  return (
    <aside>
      <h2>CATEGORIAS</h2>
      <ul>
        <li>Oscars</li> 
        <li>Celebrities</li>
        <li>Estrenos</li>
      </ul>
    </aside>
  )
} */
