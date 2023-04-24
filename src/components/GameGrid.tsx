import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { type Genre } from '../hooks/useGenres';
import { type Platform } from '../hooks/usePlatforms';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const {
        entities: games,
        error,
        isLoading,
    } = useGames(selectedGenre, selectedPlatform);
    const skeletons = Array.from({ length: 5 }, (_v, k) => k + 1);

    if (error) return <Text>{error}</Text>;

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            gap={3}
            padding="10px"
        >
            {isLoading
                ? skeletons.map((skeleton) => (
                      <GameCardContainer key={skeleton}>
                          <GameCardSkeleton />
                      </GameCardContainer>
                  ))
                : games.map((game) => (
                      <GameCardContainer key={game.id}>
                          <GameCard game={game} />
                      </GameCardContainer>
                  ))}
        </SimpleGrid>
    );
};

export default GameGrid;
