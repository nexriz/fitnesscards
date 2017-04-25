import express from 'express';
import user from './user';
import auth from './auth';


const routerApi = express.Router();

router.use('/user', user);
router.use('/auth', auth);


export default routerApi;