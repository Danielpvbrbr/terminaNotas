import axios from "axios";

let api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: false,
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

