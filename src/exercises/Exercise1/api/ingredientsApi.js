import axios from './instance/axiosFirebase';

export default {
  fetchDefaultIngredients() {
    return axios.get('/ingredients.json');
  }
};
