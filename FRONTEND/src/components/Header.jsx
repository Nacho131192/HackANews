import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            <Link to={"/"}>
                <h2 className='logo'>LOGO</h2>
            </Link>
            <h1 className='name'>Hack a News</h1>

            <ul className='nav'>
                <Link to={"/"}>
                    <li>INICIO</li>
                </Link>
                <Link to={"/register"}>
                    <li>REGISTRO</li>
                </Link>

                <Link to={"/login"}>
                    <li>LOGIN</li>
                </Link>


            </ul>

        </header>
    )
}