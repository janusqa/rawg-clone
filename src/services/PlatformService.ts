import create from './ApiClient';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export const CACHE_KEY_PLATFORMS = 'platforms';
export const ENDPOINT_PLATFORMS = '/platforms/lists/parents';

export default create<Platform>(ENDPOINT_PLATFORMS);
