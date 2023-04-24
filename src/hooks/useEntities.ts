import { useEffect, useState } from 'react';
import api, { CanceledError, AxiosRequestConfig } from '../services/api';

interface Response<T> {
    count: number;
    results: T[];
}

const useEntities = <T>(requestConfig: AxiosRequestConfig, deps?: any[]) => {
    const [entities, setEntities] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(function () {
        const controller = new AbortController();

        const fetchEntities = () => {
            api.request<Response<T>>({
                ...requestConfig,
                signal: controller.signal,
            })
                .then(function (response) {
                    setEntities(response.data.results);
                    setError('');
                })
                .catch(function (error) {
                    if (!(error instanceof CanceledError)) {
                        const errorMessage =
                            error instanceof Error
                                ? error.message
                                : 'Unknown error';
                        setError(errorMessage);
                    }
                })
                .finally(() => setIsLoading(false));
        };

        setTimeout(fetchEntities, 500);

        return function () {
            controller.abort();
        };
    }, deps ?? []);

    return { entities, error, isLoading };
};

export default useEntities;
