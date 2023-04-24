import { GameQuery } from '../App';
import useEntities from './useEntities';
import { type Genre } from './useGenres';
import { type Platform } from './usePlatforms';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
}

const useGames = (gameQuery: GameQuery) =>
    useEntities<Game>(
        {
            url: '/games',
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchTerms,
            },
        },
        [
            gameQuery.genre?.id,
            gameQuery.platform?.id,
            gameQuery.sortOrder,
            gameQuery.searchTerms,
        ]
    );

export default useGames;
