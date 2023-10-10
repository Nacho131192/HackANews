import { useLogin } from '../hooks/useLogin';
import useMeEntries from '../hooks/useMeEntries';
import AllEntries from '../components/AllEntries';
import { Navigate } from 'react-router-dom';

export default function MyNewsPage() {
    const { user } = useLogin();

    // Si el usuario no está logueado redirigimos a la página principal.
    if (!user) {
        console.error('No se puede acceder a MyNewsPage');
        return <Navigate to="/" />;
    }

    // Obtenemos las noticias únicamente si existe un usuario...
    const { meNews, error, loading } = useMeEntries();

     const meNewsRating = [...meNews].sort((x, y) => {
         return y.new_likes - x.new_likes;
     });
    return (
        <>
            <h2> Mis noticias</h2>
            <AllEntries news={meNews} />
            <h2> Mis noticias mejor valoradas</h2>
            <AllEntries news={meNewsRating} />
        </>

    );
}
