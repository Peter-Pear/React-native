import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.b7web.com.br/devbarber/api',
});

export default api;
