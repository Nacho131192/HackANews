import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Hack a News</h1>
            <h2>LOGO</h2>
            <ul>
                <Link to={"/register"}>
                     <li>Registro</li>
                </Link>
                <li>Inicio de sesión</li>

            </ul>



        </header>
    )
}