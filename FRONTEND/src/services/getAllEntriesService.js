async function getAllEntriesService() {
    const response = await fetch(`http://localhost:3000/entries/allentries`);
    const json = await response.json();


    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
}

export default getAllEntriesService