import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../schema/userSchema';


const router = express.Router();

router.post('/', (req, res) => {
	if(req.body.username) {
		const token = jwt.sign({ username: req.body.username, role: 'pleb' }, 'key123')
		const newUser = new User({username: req.body.username, password: 'test'});
		newUser.save((err) => {
			if(err)
				res.status(303).json({ error: 'username taken'})
			else
				res.json({token})	
		});
	}
	else
		res.status(303).send('error, send username')

})

export default router;
