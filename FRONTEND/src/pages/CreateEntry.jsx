// Importamos los hooks.
import { useEffect, useState } from 'react';

// Importamos los servicios.
import { createEntryService } from '../services/createEntryService';

//importamos el npm de notificaciones
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Importamos la función que retorna un token.
import { getToken } from '../utilities/getToken';

const CreateEntry = () => {
    const token = getToken();
    const [fetchedCategories, setFetchedCategories] = useState([]);

    useEffect(() => {
        let results = {};
        fetch('http://localhost:3000/entries/themes')
            .then((response) => response.json())
            .then((data) => {
                results = data.data.map((obj) => {
                    let hash = {};
                    hash['name'] = obj.theme_name;
                    hash['id'] = obj.themes_id;
                    return hash;
                });
                setFetchedCategories(results);
            });
    }, []);

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData(e.target);

            const res = await createEntryService({ data, token });
            console.log(res);
            //const body = await res.json();

            e.target.reset();

            setImage(null);
            if (!res.ok) {
                //throw new Error(body.message);
                toast.error(res.message);
            }

            // setToken(body.data.token);
            setLoading(false);

            toast.success(res.message);
        } catch (error) {
            console.log(error);
            toast.error(error.message);

            setLoading(false);
        }
    };
    return (
        <div>
            <h1>Añadir nueva noticia</h1>
            <form className="new-entry" onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="new_title">Título</label>
                    <input
                        type="text"
                        name="new_title"
                        id="new_title"
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_entrance">Entradilla</label>
                    <input
                        type="text"
                        name="new_entrance"
                        id="new_entrance"
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_text">Texto</label>
                    <input
                        type="text"
                        name="new_text"
                        id="new_title"
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_theme">Categoria</label>
                    <select name="new_theme">
                        {fetchedCategories.map((category) => {
                            return (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="new_pic">Imagen</label>
                    <input
                        type="file"
                        name="new_pic"
                        id="new_pic"
                        accept={'image/*'}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image ? (
                        <figure>
                            <img
                                src={URL.createObjectURL(image)}
                                style={{ width: '100px' }}
                                alt="Preview"
                            />
                        </figure>
                    ) : null}
                </fieldset>
                <button>Enviar noticia</button>
                {error ? <p>{error}</p> : null}
                {loading ? <p>Publicando noticia...</p> : null}
            </form>

            <ToastContainer />
        </div>
    );
};

export default CreateEntry;
