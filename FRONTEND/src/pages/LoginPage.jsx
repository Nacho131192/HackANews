import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Navigate } from 'react-router-dom';
import './Loginpage.css';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

export const LoginPage = () => {
    const { user, authLogin, loading } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Si el usuario está logeado redirigimos a la página principal.
    //   if (user) return <Navigate to='/' />;

    const handleForm = async (e) => {
        e.preventDefault();
        
        if (!password) {
            // setError('Password Incorrect. Please try again.');
            toast.error("Login Error", {
                position: 'top-center',
                autoclosse: 1500,
                theme: "dark"
            });
            return;
        }
        // setError('');

        try {
            await authLogin({ email, password });
            
            toast.success("Login Success", {
                position: 'top-center',
                autoclosse: 1000,
                theme:"dark"
            })
        } catch (error) {
            // setError(error.message);

            toast.error(error.message, {
                position: 'top-center',
                autoclosse: 2000,
                theme:"dark"
            })
            
        }
    };

    return (
        <div className="centrado">
            <section className="login">
                <h1>Login</h1>
                <form className="form-log" onSubmit={handleForm}>
                    <fieldset className="fieldSet1">
                        <label className="label-log" htmlFor="email">
                            Email{' '}
                        </label>
                        <input
                            className="input-log"
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldSet1">
                        <label className="label-log" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="input-log"
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>

                    <button className="btn_log-form" disabled={loading}>
                        Login
                    </button>
                    {error ? <p>{error}</p> : null}
                    
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};
