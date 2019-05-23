import axios from 'axios';

const axiosIns = axios.create();


export default {
  login(data) {
    return axiosIns.post('https://reqres.in/api/login', data);
  }
};

export {
  axiosIns
};