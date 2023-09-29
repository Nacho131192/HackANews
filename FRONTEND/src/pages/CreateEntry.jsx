import { useContext, useState } from "react";
import { LoginContext, LoginContextProvider } from "../context/LoginContext.jsx";
import { toast } from "react-toastify";

const CreateEntry = () => {
  const [title, setTitle] = useState("");
  const [entrance, setEntrance] = useState("");
  const [text, setText] = useState("");
  const [pic, setPic] = useState("");
  const [theme, setTheme] = useState ("")
  const { token } = useContext(LoginContext);


  console.log(token)

  return (
    <LoginContextProvider>
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();

          const res = await fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify({ new_title: title, new_entrance: entrance, new_text: text, new_pic: pic, new_theme:  theme }),
          });

          const body = await res.json();

          if (!res.ok) {
            throw new Error(body.message);
          }

          setTitle("");
          setEntrance("");
          setText("");
          setPic("");
          setTheme("")



          toast.success("¡Post creado con éxito!");
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }}
    >
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <label htmlFor="entrance">Entradilla:</label>
      <input
        id="entrance"
        required
        value={entrance}
        onChange={(e) => {
          setEntrance(e.target.value);
        }}
      ></input>

<label htmlFor="text">Texto:</label>
      <textarea
        id="text"
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>

<label htmlFor="pic">Imagen:</label>
      <input
        id="pic"
        value={pic}
        onChange={(e) => {
          setPic(e.target.value);
        }}
      ></input>
        
      <button>Crear noticia</button>
    </form>
    </LoginContextProvider>
  );
};

export default CreateEntry;