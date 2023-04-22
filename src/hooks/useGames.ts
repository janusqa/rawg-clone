import { useEffect, useState } from 'react';
import api, { CanceledError } from '../services/api';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(function () {
        const controller = new AbortController();

        api.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(function (response) {
                setGames(response.data.results);
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
                // setIsLoading(false);
            });
        // .finally(() => setIsLoading(false));

        return function () {
            controller.abort();
        };
    }, []);

    return { games, error, isLoading };
};

export default useGames;
