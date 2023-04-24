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

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) => {
    let params = selectedGenre?.id ? `?genres=${selectedGenre.id}` : '';
    params += selectedPlatform?.id
        ? `${params.length === 0 ? '?' : '&'}platforms=${selectedPlatform.id}`
        : '';

    return useEntities<Game>('/games' + params);
};

export default useGames;
