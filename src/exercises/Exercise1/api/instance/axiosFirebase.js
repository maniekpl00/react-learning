import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-learning-ceac8.firebaseio.com/'
});

export default instance;