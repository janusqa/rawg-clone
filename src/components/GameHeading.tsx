import { Heading } from '@chakra-ui/react';
import { type GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { genreId, platformId } }: Props) => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();

    const platform = platforms?.results.find(
        (platform) => platformId === platform.id
    );

    const genre = genres?.results.find((genre) => genreId === genre.id);

    const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`;
    return (
        <Heading as="h1" fontSize="5xl">
            {heading.trim()}
        </Heading>
    );
};

export default GameHeading;
