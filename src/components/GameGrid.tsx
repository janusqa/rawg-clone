import { useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';

import api from '../services/api';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(function () {
        api.get<FetchGamesResponse>('/games')
            .then(function (response) {
                setGames(response.data.results);
                setError('');
            })
            .catch(function (error) {
                const errorMessage =
                    error instanceof Error ? error.message : 'Unknown error';
                setError(errorMessage);
            });
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
