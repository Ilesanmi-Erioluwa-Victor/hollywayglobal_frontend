import axios from 'axios';
import { Util } from 'src/utils';

export const apiClient = axios.create({
  baseURL: Util.baseUrlDev,
  headers: {
    'Content-Type': 'application/json',
  },
});
