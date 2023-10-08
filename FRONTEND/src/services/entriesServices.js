const API_URL = import.meta.env.VITE_API_URL_BACKEND

export async function likesButtomService(newsId, token) {
    const response = await fetch(`${API_URL}/entries/like/${newsId}`, {
        method: "POST",
        headers: {
            Authorization: token
        },

    })
    const json = await response.json()
    
    if (!response.ok) {
        throw new Error(json.message)
    }
    return json.data
}

export async function likesStatusService(newsId, token) {
    
    const response = await fetch(`${API_URL}/entries/likestatus/${newsId}`, {
        headers: {
            Authorization: token
        },
    })
    const json = await response.json()

    if (!response.ok) {
        throw new Error(json.message)
    }
    return json.data
}