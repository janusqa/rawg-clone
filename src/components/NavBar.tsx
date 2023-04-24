import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/images/logo.webp';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchTerms: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
