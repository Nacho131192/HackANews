import { useLogin } from '../hooks/useLogin';
import useMeEntries from '../hooks/useMeEntries';
import AllEntries from '../components/AllEntries';
import { Navigate } from 'react-router-dom';

export default function MyNewsPage() {
  const { isAuthenticated } = useLogin();

  console.log(isAuthenticated);

  // Si el usuario no está logueado redirigimos a la página principal.
  if (!isAuthenticated) {
    alert('ERROR');
    return <Navigate to='/' />;
  }

  // Obtenemos las noticias únicamente si existe un usuario...
  const { meNews, error, loading } = useMeEntries();

  return (
    <>
      <h2> Mis noticias</h2>

      <AllEntries news={meNews} />
    </>
  );
}
