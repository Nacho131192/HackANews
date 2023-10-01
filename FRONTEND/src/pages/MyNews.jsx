import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

export default function MyNews() {
  const { user } = useContext(LoginContext)
  const meId = user[0].user_id
  console.log(meId)

  return (
    <h2> Mis noticias</h2>
  )
}
