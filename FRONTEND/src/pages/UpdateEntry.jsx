import { useContext, useEffect, useState } from "react";
import { LoginContext, LoginContextProvider } from "../context/LoginContext.jsx";
import { useParams } from "react-router-dom";
import { updateEntryService } from "../services/updateEntryService";
import getEntryService from "../services/getEntryService.js"

const UpdateEntry = ({ updateEntry }) => {
  let { entryId } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(LoginContext);
  const [entry, setEntry] = useState('')

  const [titleInput, setTitleInput] = useState("")
  const handleTitleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const [entranceInput, setEntranceInput] = useState("")
  const handleEntranceChange = (event) => {
    setEntranceInput(event.target.value);
  };

  const [textInput, setTextInput] = useState("")
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const [themeInput, setThemeInput] = useState("")
  const handleThemeChange = (event) => {
    setThemeInput(event.target.value);
  };
  
  const [picInput, setPicInput] = useState("")
  const handlePicChange = (event) => {
    setPicInput(event.target.value);
  };
   useEffect (()=>{
     fetch(`http://localhost:3000/entries/view/${entryId}`)
     .then(response => response.json())
     .then(data => {
      setTitleInput(data.data.results[0].new_title)
      setEntranceInput(data.data.results[0].new_entrance)
      setTextInput(data.data.results[0].new_text)
      setThemeInput(data.data.results[0].new_theme)
      setPicInput(data.data.results[0].new_pic)
      console.log(data.data.results[0])

    })
     .catch(err => console.log('Solicitud fallida', err));
   },[entryId])


  console.log(entry)

  const fetchedCategories = [
    {
        name: "Celebrities",
        id: 1
    },
    {
        name: "Festivals",
        id: 2
    },  
    {
        name: "Oscars 2024",
        id: 3
    },
    {
        name: "Premieres",
        id: 4
    },
    {
        name: "Ranking",
        id: 5
    },
    {
        name: "Reviews",
        id: 6
    },
  ]
  




const handleForm = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    const data = new FormData(e.target);

    await updateEntryService({ data, token, entryId });

    e.target.reset();
    setImage(null);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}


return (
  <div>
  <LoginContextProvider>
    <h1>Editar noticia</h1>
    <form className="new-entry" onSubmit={handleForm}>
      <fieldset>
        <label htmlFor="new_title">Título</label>
        <input type="text" name="new_title" id="new_title" value={titleInput} onChange={handleTitleChange} required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_entrance">Entradilla</label>
        <input type="text" name="new_entrance" id="new_entrance" value={entranceInput} onChange={handleEntranceChange}required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_text">Texto</label>
        <input type="text" name="new_text" id="new_title" value={textInput} onChange={handleTextChange}required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_theme">Categoria</label>
        <select name="new_theme" value={themeInput} onChange={handleThemeChange}>
          {
            fetchedCategories.map((category)=> {
              return (<option value={category.id} key={category.id}>{category.name}</option>)
            })
          }
          

        </select>
     
      </fieldset>

      <fieldset>
        {console.log(picInput)}
        <img src= {`http://localhost:3000/${picInput}`}/>
        <label htmlFor="new_pic">Imagen</label>
        <input
          type="file"
          name="new_pic"
          id="new_pic"
          //value="picInput"
          accept={"image/*"}
          
          onChange={handlePicChange}
        />
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              style={{ width: "100px" }}
              alt="Preview"
            />
          </figure>
        ) : null}
      </fieldset>
      <button>Editar noticia</button>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Publicando noticia...</p> : null}
    </form>
    </LoginContextProvider>
    </div>
);
        };


  export default UpdateEntry