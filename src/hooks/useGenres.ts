import useEntities from './useEntities';

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useEntities<Genre>('/genres');

export default useGenres;
