import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Navigate } from 'react-router-dom';
import './Loginpage.css';

export const LoginPage = () => {
  const { user, authLogin, loading } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Si el usuario está logeado redirigimos a la página principal.
//   if (user) return <Navigate to='/' />;

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await authLogin({ email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button disabled={loading}>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
