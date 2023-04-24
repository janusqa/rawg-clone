import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/images/Logo/logo.webp';
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} alt="logo" boxSize="60px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
