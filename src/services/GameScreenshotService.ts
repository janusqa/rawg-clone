import create from './ApiClient';
import { ENDPOINT_GAMES } from './GameService';

export interface GameScreenshots {
    id: number;
    image: string;
    width: number;
    height: number;
}

export default create<GameScreenshots>(ENDPOINT_GAMES);
