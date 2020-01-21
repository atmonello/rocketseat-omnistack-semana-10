import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

console.log('base url', baseURL);

const api = axios.create({
  baseURL
});

export default api;
