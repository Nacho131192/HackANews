// Importamos los hooks.
import { useState } from 'react';

// Importamos los servicios.
import { createEntryService } from '../services/createEntryService';

// Importamos la función que retorna un token.
import { getToken } from '../utilities/getToken';

const CreateEntry = () => {
    const fetchedCategories = [
        { name: 'Celebrities', id: 1 },
        { name: 'Festivals', id: 2 },
        { name: 'Oscars 2024', id: 3 },
        { name: 'Premieres', id: 4 },
        { name: 'Ranking', id: 5 },
        { name: 'Reviews', id: 6 },
    ];

    const token = getToken();

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData(e.target);

            await createEntryService({ data, token });

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
        </div>
    );
};

export default CreateEntry;
