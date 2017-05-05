import mongoose from 'mongoose';

export default (adr) => {
	mongoose.connect(adr);
	const db = mongoose.connection;
	db.on('error', (err) => console.log(err));
	db.once('open', () => console.log('DB is connected!'));
	return db;
}
