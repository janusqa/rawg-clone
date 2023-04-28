import { create } from 'zustand';
import { produce } from 'immer';

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchTerms?: string;
    pageSize: number;
    page: number;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (id: number) => void;
    setPlatformId: (id: number | undefined) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchTerms: (searchTerms: string) => void;
    setPageSize: (pageSize: number) => void;
    setPage: (page: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: { page: 1, pageSize: 12 },
    setGenreId: (id) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                draft.gameQuery.genreId = id;
            });
            return nextState;
        }),
    setPlatformId: (id) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                draft.gameQuery.platformId = id;
            });
            return nextState;
        }),
    setSortOrder: (sortOrder) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                draft.gameQuery.sortOrder = sortOrder;
            });
            return nextState;
        }),
    setSearchTerms: (searchTerms) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                // when searching by search terms we cleear all other filters
                // so that search is not affected by set filters
                // a search should be general
                draft.gameQuery = {
                    searchTerms,
                    page: 1,
                    pageSize: state.gameQuery.pageSize,
                };
            });
            return nextState;
        }),
    setPageSize: (pageSize) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                draft.gameQuery.pageSize = pageSize;
            });
            return nextState;
        }),
    setPage: (page) =>
        set((state) => {
            const nextState = produce(state, (draft) => {
                draft.gameQuery.page = page;
            });
            return nextState;
        }),
}));

export default useGameQueryStore;
