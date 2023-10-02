import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


const API_URL = import.meta.env.VITE_API_URL_BACKEND

async function MeNewsService(id,token) {
  console.log(id)
  console.log(token)

  const response = await fetch(`${API_URL}/entries/meentries/${id} `, {
    headers: {
      Authorization: token,
    },
  })
  const json = await response.json() 
  
  if (!response.ok) {
    throw new Error(json.message)
  }
  return json.data
} 

export default MeNewsService