import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { type GameQuery } from '../App';
import React from 'react';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGames(gameQuery);
    const skeletons = Array.from({ length: 5 }, (_v, k) => k + 1);

    if (error) return <Text>{error.message}</Text>;

    return (
        <Box padding="10px">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <GameCardContainer key={skeleton}>
                              <GameCardSkeleton />
                          </GameCardContainer>
                      ))
                    : data?.pages.map((page, index) => (
                          <React.Fragment key={index}>
                              {page.results.map((game) => (
                                  <GameCardContainer key={game.id}>
                                      <GameCard game={game} />
                                  </GameCardContainer>
                              ))}
                          </React.Fragment>
                      ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button
                    marginY={5}
                    disabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )}
        </Box>
    );
};

export default GameGrid;
