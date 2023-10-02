import { useEffect, useState } from "react"
import MeNewsService from "../services/MeNewsService"


const useMeEntries = (id,token) => {

  const [meNews, setMeNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // console.log(id)
  console.log(token)
  useEffect(() => {
    const loadmeNews = async () => {
      try {
        
        const data = await MeNewsService(id,token)
        setMeNews(data)
      } catch (error) {
        setError(error.message)
      }
    }    
    
    loadmeNews()
  }, [id])
  
  return { meNews, loading, error }
}

export default useMeEntries