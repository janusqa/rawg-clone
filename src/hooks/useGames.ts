import { useInfiniteQuery } from '@tanstack/react-query';

import { type RawgQueryResponse } from '../services/ApiClient';
import GameService, {
    type Game,
    CACHE_KEY_GAMES,
} from '../services/GameService';
import useGameQueryStore from '../store';

const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    const fetchData = (pageParam: number) => {
        const config = {
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchTerms,
                page_size: gameQuery.pageSize,
                page: pageParam,
            },
        };

        return GameService.getAll(config).request();
    };

    return useInfiniteQuery<RawgQueryResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        queryFn: ({ pageParam = 1 }) => fetchData(pageParam),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 60, // 1h / ms * s * m * h where 1000ms = 1s

        getNextPageParam: (lastPage, allPages) => {
            // lastpage is the last set of results returned by the api
            // for the rawg api if lastpage.prev or lastpage.next is null in the returned results
            // we know we have reached the beginning or the end of the paginated data
            // finally we return the calculated next page
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
};

export default useGames;
