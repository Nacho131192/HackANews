// Importamos los hooks.
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importamos los servicios.
import { updateEntryService } from '../services/updateEntryService';
// Importamos el modulo de notificaciones
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateEntry = () => {
    let { entryId } = useParams();

    const [titleInput, setTitleInput] = useState('');
    const [entranceInput, setEntranceInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [themeInput, setThemeInput] = useState('');
    const [picInput, setPicInput] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        fetch(`http://localhost:3000/entries/view/${entryId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTitleInput(data.data.results[0].new_title);
                setEntranceInput(data.data.results[0].new_entrance);
                setTextInput(data.data.results[0].new_text);
                setPicInput(data.data.results[0].new_pic);
                setThemeInput(data.data.results[0].themes_themes_id);
            })
            .catch((err) => console.log('Solicitud fallida', err));
    }, [entryId]);

    console.log(picInput);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append('new_title', titleInput);
            formData.append('new_entrance', entranceInput);
            formData.append('new_text', textInput);
            formData.append('new_pic', picInput);
            formData.append('new_theme', themeInput);

            const res = await updateEntryService({ formData, entryId });

            e.target.reset();
            if (!res.ok) {
                //throw new Error(body.message);
                toast.error(res.message);
            }

            setLoading(false);

            toast.success(res.message);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Editar noticia</h1>
            <form className="new-entry" onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="new_title">Título</label>
                    <input
                        type="text"
                        name="new_title"
                        id="new_title"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_entrance">Entradilla</label>
                    <input
                        type="text"
                        name="new_entrance"
                        id="new_entrance"
                        value={entranceInput}
                        onChange={(e) => setEntranceInput(e.target.value)}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_text">Texto</label>
                    <input
                        type="text"
                        name="new_text"
                        id="new_title"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="new_theme">Categoria</label>
                    <select
                        name="new_theme"
                        value={themeInput}
                        onChange={(e) => setThemeInput(e.target.value)}
                    >
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
                        onChange={(e) => setPicInput(e.target.files[0])}
                    />
                </fieldset>
                <button>Editar noticia</button>
                {error ? <p>{error}</p> : null}
                {loading ? <p>Publicando noticia...</p> : null}
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateEntry;
