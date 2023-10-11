import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/LoginContext';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
// import { authLogout } from '../context/LoginContext';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const API_URL = import.meta.env.VITE_API_URL_BACKEND;

import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
    const { user, authLogout } = useContext(LoginContext);
    const { token, setToken } = useContext(LoginContext);

    const [news, setNews] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        // Función que busca las entradas en la base de datos.
        const fetchEntries = async () => {
            try {
                const res = await axios.get(
                    `${API_URL}/entries/allentries?keyword=${keyword}`
                );

                // Establecemos las entradas en el State.
                setNews(res.data.data);
            } catch (err) {
                // Faltaría manejar el error.
                console.error(err);
            }
        };

        // Llamamos a la función anterior.
        fetchEntries();
    }, [keyword]);

    return (
        <>
            <header className="cabecera">
                <Link to={'/'}>
                    <img className="logo" src={logo} />
                </Link>
                <div className="input-group">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="¿Qué buscas?"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <Button type="button" variant="secondary">
                        Buscar
                    </Button>
                </div>

                <div className="btn_reg_log">
                    <div>
                        {!user && (
                            <Link to={'/register'}>
                                <Button
                                    className="btn_non_user"
                                    variant="secondary"
                                >
                                    REGISTRO
                                </Button>
                            </Link>
                        )}
                    </div>

                    <div className="btn_non_user">
                        {!user && (
                            <Link to={'/login'}>
                                <Button
                                    className="btn_non_user"
                                    variant="secondary"
                                >
                                    LOGIN
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </header>
            <div className="btn_menu_user">
                {user && (
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                        >
                            PERFIL
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <Link to="/mynews">MIS NOTICIAS</Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <Link to="/createentry">NUEVA NOTICIA</Link>
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">
                                <Link onClick={() => authLogout()} to="/">
                                    {' '}
                                    CERRAR SESION{' '}
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {user && (
                    <Link onClick={() => authLogout()} to="/">
                        <FontAwesomeIcon
                            className="icon_log_out"
                            icon={faPowerOff}
                        />
                    </Link>
                )}
            </div>
        </>
    );
}
