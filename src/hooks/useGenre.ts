import useGenres from './useGenres';

const useGenre = (genreId?: number) => {
    const { data: genres } = useGenres();

    return genres?.results.find((genre) => genreId === genre.id);
};

export default useGenre;
