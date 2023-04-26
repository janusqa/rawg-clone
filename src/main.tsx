import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';
import './index.css';
import theme from './theme';

const queryClient = new QueryClient({
    // we can override default options here or per query
    // one of the popular ones to override per query is staleTime
    defaultOptions: {
        queries: {
            retry: 3,
            cacheTime: 1000 * 60 * 5, // default 5 mins
            staleTime: 1000 * 10, // 10 seconds
            refetchOnWindowFocus: true, //  default true
            refetchOnReconnect: true, // default true
            refetchOnMount: true, // default true
        },
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App />
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
);
