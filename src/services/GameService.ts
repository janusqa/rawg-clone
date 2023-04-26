import create from './ApiClient';
import { type Genre } from './GenreService';
import { type Platform } from './PlatformService';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    rating_top: number;
}

export default create<Game>('/games');
