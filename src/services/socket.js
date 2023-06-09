import io from 'socket.io-client';
const socket = io.connect("http://localhost:4000"); //http://144.22.145.99:4000
export default socket;

