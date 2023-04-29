import { Box } from '@chakra-ui/react';
import React, { type ForwardedRef } from 'react';

interface Props {
    children: React.ReactNode;
}

// forwardRef is used to pass the ref to the container
// this is use to help make infinite scroll work
// we will mark the last element of any page with a ref
// so we know when to behing loading the next page
// a ref is only passed in if its the last element
// encountered when mapping in the parent component
// otherwise it is null
const GameCardContainer = React.forwardRef(
    ({ children }: Props, ref: ForwardedRef<HTMLDivElement> | null) => {
        const container = ref ? (
            <Box
                ref={ref}
                borderRadius={10}
                overflow="hidden"
                _hover={{
                    transform: 'scale(1.03)',
                    transition: 'transform .15s ease-in',
                }}
            >
                {children}
            </Box>
        ) : (
            <Box
                borderRadius={10}
                overflow="hidden"
                _hover={{
                    transform: 'scale(1.03)',
                    transition: 'transform .15s ease-in',
                }}
            >
                {children}
            </Box>
        );

        return container;
    }
);

export default GameCardContainer;
