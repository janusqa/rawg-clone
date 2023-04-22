import useEntities from './useEntities';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = () => {
    const { entities: games, error, isLoading } = useEntities<Game>('/games');

    return { games, error, isLoading };
};

export default useGames;
