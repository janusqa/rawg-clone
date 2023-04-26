import create from './ApiClient';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export default create<Platform>('/platforms/lists/parents');
