import { useState } from "react"

export default function RegisterPage() {

  const [formValues, setFormValues] = useState({
    username: '',
    usermail: '',
    userpass1: '',
    userpass2:''
  })
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState('')
  
  function handleFormChange(e) {
    // console.log(e)
   setFormValues ({...formValues,[e.target.name]: e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues.userpass1)
    console.log(formValues.userpass2)
    if (formValues.userpass1 !== formValues.userpass2) {
      setError("Password do not match ")
      return
    }
    
  }
  return (
    <section>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">User name </label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleFormChange}
            value={formValues.username}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="usermail">Email </label>
          <input
            id="usermail"
            type="email"
            name="usermail"
            onChange={handleFormChange}
            value={formValues.usermail}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="userpass1">Password </label>
          <input
            id="userpass1"
            type="password"
            name="userpass1"
            onChange={handleFormChange}
            value={formValues.userpass1}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="userpass2">Repeat password </label>
          <input
            id="userpass2"
            type="password"
            name="userpass2"
            onChange={handleFormChange}
            value={formValues.userpass2}
          />
        </fieldset>
        {error ? <p>{error}</p> : null}
        <button>Register</button>
      </form>
    </section>
  )
  
}