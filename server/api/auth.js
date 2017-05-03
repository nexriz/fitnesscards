import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
	if(req.body.username) {
		const token = jwt.sign({ username: req.body.username, role: 'pleb' }, 'key123')
		res.json({token})
	}
	else
		res.status(303).send('error, send username')

})

export default router;
