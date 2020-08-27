import axios from 'axios';
// import { response } from 'express';

export default {

  // User Routes
  createUser: (obj) => {
    axios.post('/api/user', obj)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => console.log(error))
  },

  getAllUsers: () => {
    return axios.get('/api/user/all');
  },

  getUserByName: (name) => {
    return axios.get(`/api/user/${name}`);
  }
}