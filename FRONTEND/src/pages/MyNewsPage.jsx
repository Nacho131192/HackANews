import { useLogin } from '../hooks/useLogin';
import useMeEntries from '../hooks/useMeEntries';
import AllEntries from '../components/AllEntries';
import { Navigate } from 'react-router-dom';
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
    
    const { initPage, endPage, setInitPage, setEndPage } = UsePageNumber(6);

    const newsArray = meNews.slice(initPage, endPage);
    
    return (
        <>
            <h2> Mis noticias</h2>

            <button
                onClick={() => {
                    setInitPage(initPage - 6);
                    setEndPage(endPage - 6);
                    if (initPage <= 0) {
                        setInitPage(0), setEndPage(6);
                    }

                    console.log(initPage, endPage);
                }}
            >
                Previous
            </button>
            <button
                onClick={() => {
                    if (endPage <= meNews.length) {
                        setInitPage(initPage + 6);
                        setEndPage(endPage + 6);
                    }
                    console.log(initPage, endPage);
                }}
            >
                Next
            </button>

            <AllEntries news={newsArray} />
            <h2> Mis noticias mejor valoradas</h2>
            <AllEntries news={meNewsRating} />
        </>
    );
}
