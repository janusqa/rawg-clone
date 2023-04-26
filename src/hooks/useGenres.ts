import { useQuery } from '@tanstack/react-query';

import GenreService, { type Genre } from '../services/GenreService';
import { type RawgQueryResponse } from '../services/ApiClient';
import initialData from '../data/genres';

const CACHE_KEY_GENRES = ['genres'];

const useGenres = () => {
    return useQuery<RawgQueryResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: GenreService.getAll().request,
        staleTime: 1000 * 60 * 60 * 24, // 24h / ms * s * m * h where 1000ms = 1s
        initialData: {
            results: initialData,
            count: initialData.length,
        },
    });
};

export default useGenres;
