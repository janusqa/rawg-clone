import { useEffect, useState } from 'react';
import api, { CanceledError } from '../services/api';

interface Response<T> {
    count: number;
    results: T[];
}

const useEntities = <T>(endpoint: string) => {
    const [entities, setEntities] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(
        function () {
            const controller = new AbortController();

            const fetchEntities = () => {
                api.get<Response<T>>(endpoint, { signal: controller.signal })
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
        },
        [endpoint]
    );

    return { entities, error, isLoading };
};

export default useEntities;
