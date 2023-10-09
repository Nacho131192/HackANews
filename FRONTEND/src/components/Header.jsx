import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo3.png';
import Button from 'react-bootstrap/Button';
const API_URL = import.meta.env.VITE_API_URL_BACKEND;


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Header() {
    const { user } = useContext(LoginContext);
    const { token, setToken } = useContext(LoginContext);
    
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
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="¿Qué buscas?" aria-label="Search" aria-describedby="search-addon" />
                <Button type="button" variant="secondary" >Buscar</Button>
            </div>



        <div className='btn_position'>  
            <div >{!user && <Link to={"/register"}>
                    <Button className="btn_non_user" variant="secondary">REGISTRO</Button>
                </Link>}</div>

            <div className='btn_non_user'>{!user && <Link to={"/login"}>
                    <Button className="btn_non_user" variant="secondary">LOGIN</Button>
                </Link>}</div>
        </div>
 
            <div className='perfil'>
       {user &&  <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          PERFIL
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" >
          <Link to="/mynews">
            MIS NOTICIAS
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" >
          <Link to="/createentry">
            NUEVA NOTICIA
            </Link>
            </Dropdown.Item>
       
          
            <Dropdown.Divider />
            {token && (
            <Dropdown.Item href="#/action-4" onClick={() => setToken("")}>Logout</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>}
      </div>   
                
            
        </header>
    );
}
