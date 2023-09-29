import { useContext, useState } from "react";
import { createEntryService } from "../services/createEntryService";
import { LoginContext, LoginContextProvider } from "../context/LoginContext.jsx";

const CreateEntry = ({ addEntry }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(LoginContext);


const handleForm = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    const data = new FormData(e.target);
    console.log(data)
    const entry = await createEntryService({ data, token });

    addEntry(entry);

    e.target.reset();
    setImage(null);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
return (
  <div>
  <LoginContextProvider>
    <h1>Añadir nueva noticia</h1>
    <form className="new-entry" onSubmit={handleForm}>
      <fieldset>
        <label htmlFor="new_title">Título</label>
        <input type="text" name="new_title" id="new_title" required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_entrance">Entradilla</label>
        <input type="text" name="new_entrance" id="new_entrance" required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_text">Texto</label>
        <input type="text" name="new_text" id="new_title" required />
      </fieldset>

      <fieldset>
        <label htmlFor="new_pic">Imagen</label>
        <input
          type="file"
          name="pic"
          id="pic"
          accept={"image/*"}
          onChange={(e) => setImage(e.target.files[0])}
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
      <button>Enviar noticia</button>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Publicando noticia...</p> : null}
    </form>
    </LoginContextProvider>
    </div>
);
        };


  export default CreateEntry

