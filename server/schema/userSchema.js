import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	role: { type: String, default: 'newbie' },
	date: { type: Date, default: Date.now },

});

const User = mongoose.model('User', userSchema);


export default User;


