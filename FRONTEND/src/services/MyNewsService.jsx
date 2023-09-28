export default async function MynewsService() {
  const token = "xxxxxx"
  const response = await fetch(`http://localhost:3000/getMeUsers`, {
    headers: {
      "Authorization" : token,
    }
  })
  
} 