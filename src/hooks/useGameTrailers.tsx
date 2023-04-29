import { useQuery } from '@tanstack/react-query';
import { ENDPOINT_GAMES, CACHE_KEY_GAMES } from '../services/GameService';
import GameTrailerService, {
    GameTrailers,
} from '../services/GameTrailerService';
import { RawgQueryResponse } from '../services/ApiClient';

const useGameTrailers = (id: number | undefined) => {
    const config = { url: `${ENDPOINT_GAMES}/${id}/movies` };

    return useQuery<RawgQueryResponse<GameTrailers>, Error>({
        queryKey: [CACHE_KEY_GAMES, id, 'movies'],
        queryFn: GameTrailerService.getAll(config).request,
        staleTime: 1000 * 60 * 60 * 24, // 1h / ms * s * m * h where 1000ms = 1s
        enabled: !!id,
    });
};

export default useGameTrailers;
