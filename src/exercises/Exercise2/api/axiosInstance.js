import axios from 'axios';

// Instance inherit configuration of axios.defaults, so we need to override
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;