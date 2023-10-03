import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function MyUserZone() {
  const { user } = useLogin()
  return (
    <ul>
      <Link to="/mynews"><li>mis noticias</li></Link>
      <Link to="/createentry"><li>nueva noticia</li></Link>
      <p>{ `${user.user_name} esta logueado`}</p>
    </ul>
  )
}