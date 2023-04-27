import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    selectedOSortrder?: string;
    onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedOSortrder, onSelectSortOrder }: Props) => {
    const sortOrders = [
        { value: 'relevence', label: 'Relevence' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-release', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];

    const currentSortOrder = sortOrders.find(
        (order) => order.value === selectedOSortrder
    )?.label;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder ?? `Relevence`}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
