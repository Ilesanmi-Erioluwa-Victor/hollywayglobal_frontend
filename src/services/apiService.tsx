import axios from 'axios';
// import { Util } from 'src/utils';

export const apiClient = axios.create({
  baseURL: 'https://hollywayglobadb.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
