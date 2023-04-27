import { useQuery } from '@tanstack/react-query';

import PlatformService, { type Platform } from '../services/PlatformService';
import { type RawgQueryResponse } from '../services/ApiClient';
import initialData from '../data/platforms';

const CACHE_KEY_GENRES = ['platforms'];

const usePlatforms = () => {
    return useQuery<RawgQueryResponse<Platform>, Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: PlatformService.getAll().request,
        staleTime: 1000 * 60 * 60 * 24, // 24h / ms * s * m * h where 1000ms = 1s
        initialData,
    });
};

export default usePlatforms;
