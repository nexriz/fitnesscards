import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import CORS from 'cors'
import path from 'path';
import mongoose from 'mongoose';
import Card from './schema/cardSchema';
import User from './schema/userSchema';



// Routes import
import apiRoutes from './api';


const PORT = 8080;

const app = express();

// Middleware 
app.use(CORS())
app.use(helmet())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '..', 'build')))


// Database MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/fitnesscards');
const db = mongoose.connection;
db.on('error', (err) => console.log());
db.once('open', () => console.log('DB is connected!'));




// our Routes
app.use('/api', apiRoutes);

// sending out static html on get request
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => 
		console.log(`Server is up and running on localhost:${PORT}`))