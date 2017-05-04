import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema({
	title: String,
	picture: String,
	color: String,
	exercises: String,
	alternative: String,
	extra: String,
	date: { type: Date, default: Date.now },
	meta: {
		votes: Number,
		favs: Number
	}
});

const Card = mongoose.model('Card', cardSchema);

export default Card;


