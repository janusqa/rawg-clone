import { Heading } from '@chakra-ui/react';
import { type GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { genreId, platformId } }: Props) => {
    const genre = useGenre(genreId);
    const platform = usePlatform(platformId);

    const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`;
    return (
        <Heading as="h1" fontSize="5xl">
            {heading.trim()}
        </Heading>
    );
};

export default GameHeading;
