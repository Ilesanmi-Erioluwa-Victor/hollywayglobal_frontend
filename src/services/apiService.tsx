import axios from 'axios';
import { Util } from 'src/utils';

export const apiClient = axios.create({
  baseURL: Util.baseUrlDev,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setBearerToken = (token: string) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
