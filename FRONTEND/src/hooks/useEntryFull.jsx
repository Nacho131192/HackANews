import { useEffect, useState } from "react";
import getEntryService from '../services/getEntryService';



const useEntry = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);

                const data = await getEntryService();

                setNews(data);
            } catch {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadNews();
    }, []);

    return { news, loading, error };
};


export default useEntry;