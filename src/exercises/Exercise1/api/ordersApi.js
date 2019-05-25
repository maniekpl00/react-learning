import axios from './instance/axiosFirebase';

export default {
  saveOrder(data) {
    return axios.post('/orders.json', data);
  },

  fetchOrders() {
    return axios.get('/orders.json');
  }
};
