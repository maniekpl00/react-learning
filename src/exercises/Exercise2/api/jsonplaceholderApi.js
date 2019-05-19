// import axios from 'axios';
import axios from './axiosInstance';

// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const BASE_URL = '/posts';

//Set globally default base URL for requests
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';

//Authorization
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

//Set Content-type, application/json is default anyway
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptor can be use to handle error everywhere
axios.interceptors.request.use(
  request => {
    console.log('[Exercise2.jsx] request: ', request);
    return request;
  },
  error => {
    console.log(
      '[Exercise2.jsx] error request. It is related to the sending the request e.g. No Connection',
      error
    );
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('[Exercise2.jsx] response: ', response);
    return response;
  },
  error => {
    console.log('[Exercise2.jsx] error response', error);
    return Promise.reject(error);
  }
);

export default {
  fetchPostsFailed() {
    return axios.get(`${BASE_URL}/failing_test`);
  },

  fetchPosts() {
    return axios.get(BASE_URL);
  },

  // Use defaults baseURL
  fetchPostById(postId) {
    return axios.get(`${BASE_URL}/${postId}`);
  },

  savePost(data) {
    return axios.post(BASE_URL, data);
  },

  deletePostById(postId) {
    return axios.delete(`${BASE_URL}/${postId}`);
  }
};
