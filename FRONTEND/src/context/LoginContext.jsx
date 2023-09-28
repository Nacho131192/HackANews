import { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    // return <p>este es el proveedor del contexto</p>  //!  <-- este return lo pinta en el navegador
    // return children; //!  <-- este return me muestra toda al App en el navegador
    // const [color, setColor] = useState("blue");
    // return (
    // <LoginContext.Provider value={{ color, setColor }}>{children}</LoginContext.Provider> //!  <-- este return me muestra toda al App en el navegador
    // );
    

    const [token, setToken] = useState("");
    // const [user, setUser] = useState("");

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