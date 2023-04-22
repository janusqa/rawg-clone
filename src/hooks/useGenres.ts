import useEntities from './useEntities';

interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    const {
        entities: genres,
        error,
        isLoading,
    } = useEntities<Genre>('/genres');

    return { genres, error, isLoading };
};

export default useGenres;
