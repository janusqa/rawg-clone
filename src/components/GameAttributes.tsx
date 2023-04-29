import { SimpleGrid, Text } from '@chakra-ui/react';

import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
import { Game } from '../services/GameService';

interface Props {
    game: Game;
}

const GameAttributes = ({ game }: Props) => {
    /**
     * Using a definition list (dl) to display the game info
     * consisting of a defintion term (dt) and a definition description (dd)
     */
    return (
        <SimpleGrid as="dl" columns={2}>
            <DefinitionItem term="Platforms">
                {game.parent_platforms.map(({ platform }) => (
                    <Text key={platform.id}>{platform.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.genres.map((genre) => (
                    <Text key={genre.id}>{genre.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                {game.publishers.map((genre) => (
                    <Text key={genre.id}>{genre.name}</Text>
                ))}
            </DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;
