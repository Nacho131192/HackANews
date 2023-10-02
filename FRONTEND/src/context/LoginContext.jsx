import { createContext, useEffect, useState } from 'react';
import getMyDataService from '../services/getMyDataService';

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState("");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getMyData = async () => {
      try {
        const data = await getMyDataService(token)

        setUser(data)
      } catch (error) {
        setToken("")
        setUser(null)
      }
    }
    if (token) getMyData()
  }, [token, setToken])
  return (
    <LoginContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };