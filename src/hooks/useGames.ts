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

const useGames = (gameQuery: GameQuery) => {
    let params = gameQuery.genre?.id ? `?genres=${gameQuery.genre.id}` : '';
    params += gameQuery.platform?.id
        ? `${params.length === 0 ? '?' : '&'}platforms=${gameQuery.platform.id}`
        : '';

    return useEntities<Game>('/games' + params);
};

export default useGames;
