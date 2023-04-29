import { SimpleGrid, Spinner, Text, Image } from '@chakra-ui/react';
import useGameScreenshots from '../hooks/useGameScreenshots';

interface Props {
    gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
    const { data: screenshots, error, isLoading } = useGameScreenshots(gameId);

    if (error) throw error;

    if (isLoading) return <Spinner />;

    console.log(screenshots.results);

    return screenshots ? (
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
            {screenshots.results.map((s) => (
                <Image key={s.id} src={s.image} />
            ))}
        </SimpleGrid>
    ) : (
        <Text>No screenshots available</Text>
    );
};

export default GameScreenShots;
