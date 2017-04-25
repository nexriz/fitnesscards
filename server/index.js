import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import CORS from 'cors'
import path from 'path';


// Routes import
import apiRoutes from './api';


const PORT = 3001

const app = express();

// Middleware 
app.use(CORS())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '..', 'static')))



// our Routes
app.use('/api', apiRoutes);

// sending out static html on get request
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'static', 'index.html'))
})

app.listen(PORT, () => 
		console.log(`Server is up and running on localhost:${PORT}`))