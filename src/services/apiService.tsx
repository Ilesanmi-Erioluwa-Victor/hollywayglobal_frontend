import axios from 'axios';
// import { Util } from 'src/utils';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
});


