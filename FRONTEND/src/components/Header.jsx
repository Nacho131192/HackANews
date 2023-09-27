import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Hack a News</h1>
            <h2>LOGO</h2>
            <ul>
                <Link to={"/"}>
                    <li>Inicio</li>
                </Link>
                <Link to={"/register"}>
                    <li>Registro</li>
                </Link>

                <Link to={"/login"}>
                    <li>Login</li>
                </Link>

            </ul>



        </header>
    )
}