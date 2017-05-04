import express from 'express';
import register from './register';
import auth from './auth';
import card from './card';


const routerApi = express.Router();



routerApi.use('/auth', auth);
routerApi.use('/register', register);
routerApi.use('/card', card);



export default routerApi;