import { Heading, Text, Box } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    const errorMessage = isRouteErrorResponse(error)
        ? 'This page does not exist'
        : error instanceof Error
        ? error.message
        : 'Sorry, an unexpected error has occurred';

    return (
        <Box padding={5}>
            <Heading>Oops...</Heading>
            <Text>{errorMessage}</Text>
        </Box>
    );
};

export default ErrorPage;
