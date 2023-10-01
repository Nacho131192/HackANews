export const updateEntryService = async ({ data, token, entryId }) => {
  const response = await fetch(
    `http://localhost:3000/entries/update/${entryId}`,
    {
      method: 'POST',
      body: data,
      headers: {
        Authorization: token
      }
    }
  )

  const json = await response.json()
  if (!response.ok) {
    throw new Error(json.message)
  }
  return json.data
}
