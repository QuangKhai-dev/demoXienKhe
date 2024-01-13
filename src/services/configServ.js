import axios from 'axios';

export const https = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});
