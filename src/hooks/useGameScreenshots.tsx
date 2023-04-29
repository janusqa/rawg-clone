import { useQuery } from '@tanstack/react-query';
import { ENDPOINT_GAMES, CACHE_KEY_GAMES } from '../services/GameService';
import GameScreenshotService, {
    type GameScreenshots,
} from '../services/GameScreenshotService';
import { RawgQueryResponse } from '../services/ApiClient';

const useGameScreenshots = (id: number | undefined) => {
    const config = { url: `${ENDPOINT_GAMES}/${id}/screenshots` };

    return useQuery<RawgQueryResponse<GameScreenshots>, Error>({
        queryKey: [CACHE_KEY_GAMES, id, 'screenshots'],
        queryFn: GameScreenshotService.getAll(config).request,
        staleTime: 1000 * 60 * 60 * 24, // 1h / ms * s * m * h where 1000ms = 1s
        enabled: !!id,
    });
};

export default useGameScreenshots;
