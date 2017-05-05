import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'
import path from 'path';
import mongodb from './mongodb';

import socket from './socket.js';
import allowCrossDomain from './utilz/AllowCrossDomain';

// Schema
import Card from './schema/cardSchema';
import User from './schema/userSchema';

// Routes import
import apiRoutes from './api';


const PORT = 8080;
const app = express();

// Middleware 
app.use(cors())

// app.use(allowCrossDomain);
app.use(helmet())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '..', 'build')))


// Database MongoDB
const db = mongodb('mongodb://127.0.0.1:27017/fitnesscards');

// our Routes
app.use('/api', apiRoutes);

// sending out static html on get request
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => 
		console.log(`Server is up and running on localhost:${PORT}`))


// My websocket
const io = socket(require('http').createServer(app), 8000);

io.on('connection', socket => {
	socket.emit('message', { hello: 'test'});
	socket.on('message', data => console.log(data));
});