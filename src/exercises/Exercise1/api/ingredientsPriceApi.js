import axios from './instance/axiosFirebase';

export default {
  fetchIngredientsPrice() {
    return axios.get('/ingredients-price.json');
  }
};
