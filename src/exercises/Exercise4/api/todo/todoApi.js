import axiosInstance from './config/axiosInstance';
import messages from './config/messages';

export default {
  fetchTodo() {
    return axiosInstance.get('/todos.json');
  },

  fetchInvalidTodo() {
    return axiosInstance.get('/todos.jsons');
  }
};

export { axiosInstance, messages };
