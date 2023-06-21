import axios from "axios";

let api = axios.create({
  baseURL: 'https://vps47428.publiccloud.com.br',//http://localhost:4000 //https://vps47428.publiccloud.com.br
  withCredentials: false,
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

//http://144.22.145.99:4000/