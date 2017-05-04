import express from 'express';
import jwt from 'jsonwebtoken';


const user = express.Router();

user.post('/', (req, res) => {
		if(req.body.username) {
			const token = jwt.sign({ username: req.body.username, role: 'pleb' }, 'key123')
			const Auth = ['Authorization', `Bearer ${token}`];			
			res.set(...Auth)
			res.json({
				token,
				tokenDecoded: jwt.decode(token)
			})
		}
		else 
			res.status(303).send('error, send username')
})


export default user;