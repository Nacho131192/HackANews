
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
                    <li><button className='btn_header'>INICIO</button></li>
                </Link>
                <Link to={"/register"}>
                    <li><button className='btn_header'>REGISTRO</button></li>
                </Link>

                <Link to={"/login"}>
                    <li><button className='btn_header'>LOGIN</button></li>
                </Link>

            </ul>
        </header>
    );
}
