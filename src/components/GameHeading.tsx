import { Heading } from '@chakra-ui/react';
import { type GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { genre, platform } }: Props) => {
    const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`;
    return (
        <Heading as="h1" fontSize="5xl">
            {heading.trim()}
        </Heading>
    );
};

export default GameHeading;
