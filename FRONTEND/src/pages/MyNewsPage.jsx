import { useLogin } from '../hooks/useLogin';
import useMeEntries from '../hooks/useMeEntries';
import AllEntries from '../components/AllEntries';
import { Link, Navigate } from 'react-router-dom';
import UsePageNumber from '../hooks/usePageNumber';

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
    
    const { initPage, endPage, setInitPage, setEndPage } = UsePageNumber(9);

    const newsArray = meNews.slice(initPage, endPage);
    
    return (
        <>
            <h2> Mis noticias</h2>

            <button
                onClick={() => {
                    setInitPage(initPage - 9);
                    setEndPage(endPage - 9);
                    if (initPage <= 0) {
                        setInitPage(0), setEndPage(9);
                    }

                    console.log(initPage, endPage);
                }}
            >
                Previous
            </button>
            <button
                onClick={() => {
                    if (endPage <= meNews.length) {
                        setInitPage(initPage + 9);
                        setEndPage(endPage + 9);
                    }
                    console.log(initPage, endPage);
                }}
            >
                Next
            </button>
            <Link to="/entries/nymnewsrating">
                <h3> mejor valoradas</h3>
            </Link>
            <AllEntries news={newsArray} />

        </>
    );
}
