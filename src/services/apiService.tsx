import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://hollywayglobadb.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
