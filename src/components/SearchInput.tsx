import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const onSearch = useGameQueryStore((s) => s.setSearchTerms);

    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchInputRef?.current) {
            onSearch(searchInputRef.current.value);
            navigate('/');
        }
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
