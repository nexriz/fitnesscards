import websocket from 'socket.io';

export default function(socket, port) {
	const io = websocket(socket);
	io.listen(port)
	return io;
}