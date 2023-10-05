import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';


export default function Header() {
    const { user } = useContext(LoginContext);
    return (
        <header className='header'>
            
            <Link to={"/"}>
                <img className='logo' src={logo} />
            </Link>
            {/* <h1 className='name'>Hack a News</h1> */}

            <ul className='nav'>
                {/* <Link to={"/"}>
                    <li><button className='btn_header'>INICIO</button></li>
                </Link> */}
                {!user && <Link to={"/register"}>
                    <li><button className='btn_header'>REGISTRO</button></li>
                </Link>}

                {!user && <Link to={"/login"}>
                    <li><Button variant="outline-light">LOGIN</Button></li>
                </Link>}
                {user && <Link to="/mynews"><li><button className='btn_header'>MIS NOTICIAS</button></li></Link>}
                {user && <Link to="/createentry"><li><button className='btn_header'>NUEVA NOTICIA</button></li></Link>}
                {user && <li><button className='btn_header'>LOG OUT</button></li>}
            </ul>
        </header>
    );
}
