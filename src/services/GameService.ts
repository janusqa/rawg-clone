import create from './ApiClient';
import { type Genre } from './GenreService';
import { type Platform } from './PlatformService';

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    rating_top: number;
    description_raw: string;
}

export const CACHE_KEY_GAMES = 'games';
export const ENDPOINT_GAMES = '/games';

export default create<Game>(ENDPOINT_GAMES);
