import useEntities from './useEntities';

interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useEntities<Genre>('/genres');

export default useGenres;
