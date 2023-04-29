import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/images/logo.webp';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Link to="/">
                <Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
