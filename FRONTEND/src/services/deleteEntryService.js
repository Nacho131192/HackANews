const API_URL = import.meta.env.VITE_API_URL_BACKEND

export default async function deleteEntryService(id, token) {
  
  const response = await fetch(`${API_URL}/entries/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })

  const json = await response.json()

  if (!response.ok) {
    throw new Error(json.message)
  }
}
