import { Spinner, Heading, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenShots from '../components/GameScreenShots';

const GameDetailPage = () => {
    const { slug } = useParams();
    if (!slug) throw new Error('We do not have any information on this game');

    const { data: game, error, isLoading } = useGame(slug);

    if (error) throw error;
    if (isLoading) return <Spinner />;

    return (
        <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={2}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenShots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
