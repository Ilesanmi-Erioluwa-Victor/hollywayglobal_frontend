import axios from 'axios';
import { Util } from 'src/utils';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
    // You can set common headers here (e.g., authentication headers)
  },
});
