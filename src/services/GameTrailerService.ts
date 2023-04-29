import create from './ApiClient';
import { ENDPOINT_GAMES } from './GameService';

export interface GameTrailers {
    id: number;
    name: string;
    preview: string;
    data: { 480: string; max: string };
}

export default create<GameTrailers>(ENDPOINT_GAMES);
