import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { type Game } from '../services/GameService';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/imageUrl';
import Emoji from './Emoji';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Link to={`/games/${game.slug}`}>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}></Image>
                <CardBody>
                    <HStack justifyContent="space-between" marginBottom={3}>
                        <PlatformIconList platforms={game.parent_platforms} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading fontSize="2xl">{game.name}</Heading>
                    <Emoji rating={game.rating_top} />
                </CardBody>
            </Card>
        </Link>
    );
};

export default GameCard;
