import { useQuery } from '@tanstack/react-query';

import GenreService, {
    type Genre,
    CACHE_KEY_GENRES,
} from '../services/GenreService';
import { type RawgQueryResponse } from '../services/ApiClient';
import initialData from '../data/genres';

const useGenres = () => {
    return useQuery<RawgQueryResponse<Genre>, Error>({
        queryKey: [CACHE_KEY_GENRES],
        queryFn: GenreService.getAll().request,
        staleTime: 1000 * 60 * 60 * 24, // 24h / ms * s * m * h where 1000ms = 1s
        initialData,
    });
};

export default useGenres;
