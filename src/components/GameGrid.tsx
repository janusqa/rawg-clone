import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = Array.from({ length: games.length }, (_v, k) => k + 1);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                gap={10}
                padding="10px"
            >
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <GameCardSkeleton key={skeleton} />
                      ))
                    : games.map((game) => (
                          <GameCard key={game.id} game={game} />
                      ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
