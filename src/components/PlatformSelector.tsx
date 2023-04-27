import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platformId: number | undefined) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    const selectedPlatform = data?.results.find(
        (platform) => selectedPlatformId === platform.id
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? 'Platforms'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform(undefined)}>
                    Platforms
                </MenuItem>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform.id)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
