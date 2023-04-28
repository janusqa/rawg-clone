import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

    const { data, error } = usePlatforms();

    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

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
