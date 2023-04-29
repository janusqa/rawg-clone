import create from './ApiClient';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const CACHE_KEY_GENRES = 'genres';
export const ENDPOINT_GENRES = '/genres';

export default create<Genre>(ENDPOINT_GENRES);
