import io from 'socket.io-client';
const socket = io.connect("https://vps47428.publiccloud.com.br/"); //http://localhost:4000 //https://vps47428.publiccloud.com.br
export default socket;

