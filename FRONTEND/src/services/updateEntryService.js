import { getToken } from '../utilities/getToken';

export const updateEntryService = async ({ formData, entryId }) => {
    const token = getToken();

    //CORREGIR DIRECCION SERVIDOR
    const response = await fetch(
        `http://localhost:3000/entries/update/${entryId}`,
        {
            method: 'POST',
            headers: {
                Authorization: token,
            },
            body: formData,
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};
