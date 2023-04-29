import { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';

interface Props {
    children: string;
    limit?: number;
}

const ExpandableText = ({ children, limit }: Props) => {
    const [expanded, setExpanded] = useState(false);

    if (!children) return null;

    const wordLimit = limit ?? 100;
    const words = children.split(' ');

    if (words.length <= wordLimit) return <Text>{children}</Text>;

    const summary = expanded
        ? children
        : `${words.slice(0, wordLimit).join(' ')} ...`;

    return (
        <>
            <Text>
                {summary}{' '}
                <Button
                    size="xs"
                    fontWeight="bold"
                    colorScheme="yellow"
                    onClick={() => setExpanded((prevState) => !prevState)}
                >
                    {expanded ? 'Show less' : 'Show more'}
                </Button>
            </Text>
        </>
    );
};

export default ExpandableText;
