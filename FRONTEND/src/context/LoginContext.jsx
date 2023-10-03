import { createContext, useEffect, useState } from 'react';
import getMyDataService from '../services/getMyDataService';

const { VITE_TOKEN_LOCALSTORAGE_KEY } = import.meta.env;
import { getToken } from '../utilities/getToken';
import { loginUserService } from '../services/LoginService';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Obtenemos el token.
    const token = getToken();

    // Función que retorna los datos del usuario.
    const fetchUser = async () => {
      try {
        const data = await getMyDataService(token);
        console.log(data);
        setUser(data.user);
      } catch (err) {
        alert(err.message);
      }
    };

    // Si existe un token tratamos de obtener los datos del usuario.
    if (token) fetchUser();
  }, [isAuthenticated]);

  // Función que logea a un usuario.
  const authLogin = async ({ email, password }) => {
    try {
      setLoading(true);

      const data = await loginUserService({ email, password });

      // Guardamos el token en el localStorage.
      localStorage.setItem(VITE_TOKEN_LOCALSTORAGE_KEY, data.token);

      // Indicamos que estamos autenticados.
      setIsAuthenticated(true);

      // Redirigimos a la página principal.
      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{ user, setUser, isAuthenticated, authLogin, loading }}
    >

      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
