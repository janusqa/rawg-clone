import { Spinner, Text, Box, Heading } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();
    if (!slug) throw new Error('We do not have any information on this game');

    const { data, error, isLoading } = useGame(slug);

    if (error) throw error;

    if (isLoading) return <Spinner />;

    return (
        <Box>
            <Heading>{data.name}</Heading>
            <Text>{data.description_raw}</Text>
        </Box>
    );
};

export default GameDetailPage;
