import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header() {
    const { user } = useContext(LoginContext);
    
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    const petition = async () => {
        axios.get(`${API_URL}/entries/allentries`).then((response) => {
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
        
    }
    useEffect(() => {
        petition();
    })

    return (
        <header className='header'>
            
            <Link to={"/"}>
                <img className='logo' src={logo} />
            </Link>
            <div class="input-group">
                <input type="search" className="form-control rounded" placeholder="¿Qué buscas?" aria-label="Search" aria-describedby="search-addon" />
                <Button type="button" variant="primary" >Buscar</Button>
            </div>

        <div className='btn_position'>  
            <div className='btn_reg'>{!user && <Link to={"/register"}>
                    <Button className="btn_down" variant="outline-light">REGISTRO</Button>
                </Link>}</div>

            <div className='btn_non_user'>{!user && <Link to={"/login"}>
                    <Button className="btn_down" variant="outline-light">LOGIN</Button>
                </Link>}</div>
        </div>
        <div className='btn_position'>
           {user && <DropdownButton id="dropdown-basic-button" title='PERFIL' className="btn_down">
                <Dropdown.Item href="#/action-1" ><Link to="/mynews"><Button className="btn_down"  variant="secondary">MIS NOTICIAS</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2" ><Link to="/createentry"><Button className="btn_down"  variant="secondary">NUEVA NOTICIA</Button></Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3" ><Button className="btn_down"  variant="secondary" >LOG OUT</Button></Dropdown.Item>

            </DropdownButton> }

        </div> 


                  
                
            
        </header>
    );
}
