const API_URL = import.meta.env.VITE_API_URL_BACKEND;

async function getAllEntriesService() {


    const response = await fetch(`${API_URL}/entries/allentries`);
    const json = await response.json();


    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
}

export default getAllEntriesService


