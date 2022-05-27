import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6290844f27f4ba1c65bac738.mockapi.io/',
});

export default api;
