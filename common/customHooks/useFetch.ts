import { AxiosError, AxiosPromise } from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = <T>(apiCall: (...args: any[]) => AxiosPromise, options: any, initialState: T, dependencies: Array<any> = []) => {
    const [data, setData] = useState(initialState);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            const response = await apiCall(...options);
            if (isSubscribed && response.status === 200) {
                setData(response.data);
                setLoading(false);
            }
        };
        fetchData()
            .catch((e) => {
                if (isSubscribed && e.response) {
                    setError(e);
                }
            });
        return () => { isSubscribed = false; };
    }, [...dependencies]);
    return { data, loading, error, setData };
};
