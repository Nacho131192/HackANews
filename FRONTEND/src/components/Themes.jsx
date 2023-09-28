import { Link } from "react-router-dom";


export default function Themes() {
  return (
    <aside>
        
        <h2>CATEGORIAS</h2>
        <ul>
            <Link to={"/celebrities"}>
                 <li>Celebrities</li>
            </Link>
         
            <Link to={"/premieres"}>
                 <li>Premieres</li>
            </Link>

            <Link to={"/oscars2024"}>
                 <li>Oscars 2024</li>
            </Link>

            <Link to={"/reviews"}>
                 <li>Reviews</li>
            </Link>

            <Link to={"/ranking"}>
                 <li>Ranking</li>
            </Link>

            <Link to={"/festivals"}>
                 <li>Film Festivals</li>
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
