import { useQuery } from '@tanstack/react-query';
import {
    type Game,
    ENDPOINT_GAMES,
    CACHE_KEY_GAMES,
} from '../services/GameService';
import GameService from '../services/GameService';

const useGame = (slug: string) => {
    const config = { url: `${ENDPOINT_GAMES}/${slug}` };

    return useQuery<Game, Error>({
        queryKey: [CACHE_KEY_GAMES, slug],
        queryFn: GameService.get(config).request,
        staleTime: 1000 * 60 * 60 * 24, // 1h / ms * s * m * h where 1000ms = 1s
    });
};

export default useGame;
