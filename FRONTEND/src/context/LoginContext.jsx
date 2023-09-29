import { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState("");

    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);


    return (
      <LoginContext.Provider value={{ token, setToken }}>
        {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginContextProvider };