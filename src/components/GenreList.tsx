import {
    HStack,
    List,
    ListItem,
    Image,
    Spinner,
    Button,
    Heading,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';
import useGameQueryStore from '../store';

const GenreList = () => {
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const onSelectGenre = useGameQueryStore((s) => s.setGenreId);

    const { data, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
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
                                    selectedGenreId === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => onSelectGenre(genre.id)}
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
