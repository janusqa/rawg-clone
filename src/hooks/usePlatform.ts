import usePlatforms from './usePlatforms';

const usePlatform = (platformId?: number) => {
    const { data: platforms } = usePlatforms();

    return platforms?.results.find((platform) => platformId === platform.id);
};

export default usePlatform;
