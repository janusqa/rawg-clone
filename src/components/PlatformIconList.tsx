import { HStack, Icon } from '@chakra-ui/react';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { Platform } from '../hooks/useGames';
import type { IconType } from 'react-icons';

interface Props {
    platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        mac: FaApple,
        linux: FaLinux,
        xbox: FaXbox,
        playstation: FaPlaystation,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
    };
    return (
        <HStack marginY={1}>
            {platforms.map(({ platform }) => (
                <Icon
                    as={iconMap[platform.slug]}
                    key={platform.slug}
                    color="gray.500"
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
