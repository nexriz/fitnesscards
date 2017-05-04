import express from 'express';
import jwt from 'jsonwebtoken';
import Card from '../schema/cardSchema';


const router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body)
	Card.find(req.body, (err, data) => {
		err && console.log(err);

		
		res.json(data);
	});
})

export default router;
