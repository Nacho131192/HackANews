import { useEffect, useState } from "react";
import getAllEntriesService from '../services/getAllEntriesService';



const useEntries = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);

                const data = await getAllEntriesService();

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


export default useEntries;