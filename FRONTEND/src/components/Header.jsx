import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header() {
    const { user } = useContext(LoginContext);
    
    return (
        <header className='header'>
            
            <Link to={"/"}>
                <img className='logo' src={logo} />
            </Link>

        <div className='btn_position'>  
            <div>{!user && <Link to={"/register"}>
                    <Button className="btn_down" variant="outline-light">REGISTRO</Button>
                </Link>}</div>

            <div>{!user && <Link to={"/login"}>
                    <Button className="btn_down" variant="outline-light">LOGIN</Button>
                </Link>}</div>
        </div>
        <div className='btn_position'>
           {user && <DropdownButton id="dropdown-basic-button" title='PERFIL' className="btn_down">
                <Dropdown.Item href="#/action-1" ><Link to="/mynews"><Button className="btn_down"  variant="secondary">MIS NOTICIAS</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2" ><Link to="/createentry"><Button className="btn_down"  variant="secondary">NUEVA NOTICIA</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3" ><Button className="btn_down"  variant="secondary">LOG OUT</Button></Dropdown.Item>

            </DropdownButton> }

        </div> 


                
                
                
                
            
        </header>
    );
}
