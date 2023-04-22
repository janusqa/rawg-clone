import axios, { CanceledError } from 'axios';
import { env } from '../config/env';

const api = axios.create({
    baseURL: env.VITE_RAWGIO_API_URL,
    params: { key: env.VITE_RAWGIO_API_KEY },
});

export default api;
export { CanceledError };
