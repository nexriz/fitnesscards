import express from 'express';
import user from './user';
import auth from './auth';


const routerApi = express.Router();



routerApi.use('/auth', auth);



export default routerApi;