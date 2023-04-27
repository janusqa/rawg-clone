import { MutableRefObject, useCallback, useRef } from 'react';

import {
    Box,
    Button,
    Center,
    SimpleGrid,
    Spinner,
    Text,
} from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { type GameQuery } from '../App';
import { DEFAULT_GAME_PAGE_SIZE } from '../services/GameService';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        fetchNextPage,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
    } = useGames(gameQuery);

    const skeletons = Array.from(
        { length: DEFAULT_GAME_PAGE_SIZE },
        (_v, k) => k + 1
    );

    const intObserver = useRef<IntersectionObserver | null>(null);
    const lastRef = useCallback(
        (entity: HTMLDivElement) => {
            if (isFetchingNextPage) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((entities) => {
                if (entities[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (entity) intObserver.current.observe(entity);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage]
    );

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
                    : data?.pages.map((page) => {
                          return page.results.map((game, index) => {
                              if (page.results.length === index + 1) {
                                  return (
                                      <GameCardContainer
                                          ref={lastRef}
                                          key={game.id}
                                      >
                                          <GameCard game={game} />
                                      </GameCardContainer>
                                  );
                              }
                              return (
                                  <GameCardContainer key={game.id}>
                                      <GameCard game={game} />
                                  </GameCardContainer>
                              );
                          });
                      })}
            </SimpleGrid>
            {isFetchingNextPage && (
                <Center marginY={5}>
                    <Spinner />
                </Center>
            )}
            {/* The below commented bit is for a load more infite load startegy without IntersectionObserver  */}
            {/*hasNextPage && (
                <Button
                    marginY={5}
                    disabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )*/}
        </Box>
    );
};

export default GameGrid;
