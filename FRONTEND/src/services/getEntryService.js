const API_URL = import.meta.env.VITE_API_URL_BACKEND;

async function getEntryService(id) {
    const response = await fetch(`${API_URL}/entries/view/${id} `);
    const json = await response.json();


    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
}

export default getEntryService;