import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header() {
    const { user } = useContext(LoginContext);
    
    return (
        <header className='header'>
            
            <Link to={"/"}>
                <img className='logo' src={logo} />
            </Link>

        <div className='non_user'>  
            <div>{!user && <Link to={"/register"}>
                    <Button variant="outline-light">REGISTRO</Button>
                </Link>}</div>

            <div>{!user && <Link to={"/login"}>
                    <Button variant="outline-light">LOGIN</Button>
                </Link>}</div>
        </div>
            
           {user && <DropdownButton id="dropdown-basic-button" title='PERFIL'>
                <Dropdown.Item href="#/action-1"><Link to="/mynews"><Button variant="outline-dark">MIS NOTICIAS</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link to="/createentry"><Button variant="outline-dark">NUEVA NOTICIA</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><Button variant="outline-dark">LOG OUT</Button></Dropdown.Item>

            </DropdownButton> }

                

                
                
                
                
            
        </header>
    );
}
