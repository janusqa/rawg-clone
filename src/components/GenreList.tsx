import {
    HStack,
    List,
    ListItem,
    Image,
    Spinner,
    Button,
    Heading,
} from '@chakra-ui/react';
import useGenres, { type Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { entities: genres, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    selectedGenre?.id === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => onSelectGenre(genre)}
                                variant="link"
                                fontSize="lg"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
