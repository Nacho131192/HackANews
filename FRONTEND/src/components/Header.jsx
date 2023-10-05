import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import usuario from '../assets/usuario.png';

export default function Header() {
    const { user } = useContext(LoginContext);
    return (
        <header className='header'>
            
            <Link to={"/"}>
                <img className='logo' src={logo} />
            </Link>
            {/* <h1 className='name'>Hack a News</h1> */}

            <ul className='nav'>
            <DropdownButton id="dropdown-basic-button" title='{usuario}'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
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
