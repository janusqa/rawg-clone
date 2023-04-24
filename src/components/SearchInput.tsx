import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
    onSearch: (searchTerms: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchInputRef?.current) onSearch(searchInputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={searchInputRef}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
