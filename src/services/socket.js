import io from 'socket.io-client';
const socket = io.connect("http://localhost:4000"); //http://localhost:4000 //https://vps47428.publiccloud.com.br/
export default socket;

