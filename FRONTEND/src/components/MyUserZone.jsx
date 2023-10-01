import { Link } from "react-router-dom";

export default function MyUserZone() {
  return (
    <ul>
      <Link to="/mynews"><li>mis noticias</li></Link>
      <Link to="/createentry"><li>nueva noticia</li></Link>
    
    </ul>
  )
}