import express from 'express';
import jwt from 'json-web-token';

const router = express.router();

router.post('/', (req, res) => {
		if(req.body.username) {
		const token = jwt.sign({ username: req.body.username, role: 'pleb' }, 'key123')
		const Auth = ['Authorization', `Bearer ${token}`];			
		res.set(...Auth)
		res.json({token})
	}

	res.status(303).send('error, send username')

})
