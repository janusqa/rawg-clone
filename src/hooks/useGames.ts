import useEntities from './useEntities';
import { type Genre } from './useGenres';

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
    genres: Genre[];
}

const useGames = (selectedGenre: Genre | null) => {
    const params = selectedGenre?.id ? `?genres=${selectedGenre.id}` : '';
    return useEntities<Game>('/games' + params);
};

export default useGames;
