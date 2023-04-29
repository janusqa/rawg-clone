import { Spinner } from '@chakra-ui/react';
import useGameTrailers from '../hooks/useGameTrailers';

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data: trailers, error, isLoading } = useGameTrailers(gameId);

    if (error) throw error;

    if (isLoading) return <Spinner />;

    const trailer = trailers.results[0];

    return trailer ? (
        <video src={trailer.data[480]} poster={trailer.preview} controls />
    ) : null;
};

export default GameTrailer;
