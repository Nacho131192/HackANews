import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import useMeEntries from "../hooks/useMeEntries"
import AllEntries from "../components/AllEntries"

export default function MyNewsPage() {
  const { user, token } = useContext(LoginContext)
  const meId = user[0].user_id
  // console.log(meId)
  // console.log(token)
  const { meNews, error, loading } = useMeEntries(meId,token)
  
  console.log(meNews)
  console.log(error)
  return (
    <>
        <h2> Mis noticias</h2>
     <AllEntries news={meNews} />
    </>

  )
}
