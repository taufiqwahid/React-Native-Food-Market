import axios from 'axios';

// export const api = axios.create({
//   // baseURL: 'http://127.0.0.1:8000/api/',
//   baseURL: 'http://foodmarket-backend.buildwithangga.id/api/',

// });

axios.defaults.baseURL = 'http://foodmarket-backend.buildwithangga.id/api/';

export const com = {
  login: 'login',
  register: 'register',
  logout: 'logout',
  uploadPhoto: 'user/photo',
  updateUser: 'user',
};
