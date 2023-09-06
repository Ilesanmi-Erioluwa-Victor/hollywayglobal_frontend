import axios from 'axios';
import { Util } from 'src/utils';

const apiClient = axios.create({
  baseURL: Util.baseUrlDev,
  headers: {
    'Content-Type': 'application/json',
  },
});
