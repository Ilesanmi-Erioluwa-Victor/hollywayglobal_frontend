import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://hollywayglobadb.onrender.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
