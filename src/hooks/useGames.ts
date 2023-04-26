import { useQuery } from '@tanstack/react-query';

import { type GameQuery } from '../App';
import { type RawgQueryResponse } from '../services/ApiClient';
import { type Game } from '../services/GameService';
import GameService from '../services/GameService';

const CACHE_KEY_GAMES = ['games'];

const useGames = (gameQuery: GameQuery) => {
    const config = {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchTerms,
        },
    };

    return useQuery<RawgQueryResponse<Game>, Error>({
        queryKey: [...CACHE_KEY_GAMES, gameQuery],
        queryFn: GameService.getAll(config).request,
        staleTime: 1000 * 60 * 60, // 24h / ms * s * m * h where 1000ms = 1s
    });
};

export default useGames;
