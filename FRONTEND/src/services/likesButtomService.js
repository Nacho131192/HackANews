const API_URL = import.meta.env.VITE_API_URL_BACKEND

export default async function likesButtomService(newsId, token) {
    const response = await fetch(`${API_URL}/entries/like/${newsId}`, {
        method: "POST",
        headers: {
            Authorization: token
        },

    })
    const json = await response.json()
    console.log(json);
    if (!response.ok) {
        throw new Error(json.message)
    }
    return json.data
}