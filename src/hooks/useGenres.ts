import useEntities from './useEntities';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useEntities<Genre>({ url: '/genres' });

export default useGenres;
