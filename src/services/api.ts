import axios, {
    CanceledError,
    type AxiosRequestConfig,
    type AxiosInstance,
    type AxiosError,
} from 'axios';
import { env } from '../config/env';

const api = axios.create({
    baseURL: env.VITE_RAWGIO_API_URL,
    params: { key: env.VITE_RAWGIO_API_KEY },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;
export { CanceledError, AxiosRequestConfig, AxiosInstance, AxiosError };
