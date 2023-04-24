import useEntities from './useEntities';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useEntities<Platform>({ url: '/platforms/lists/parents' });

export default usePlatforms;
