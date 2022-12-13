import axios from "axios";

let api = axios.create({
  baseURL: 'http://144.22.145.99:4000',//http://localhost:4000
  withCredentials: false,
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

//http://144.22.145.99:4000/