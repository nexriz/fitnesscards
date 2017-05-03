let init = [
	{
		name: 'Övre Bröst',
		picture: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg',
		color: '#fffde7',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3'
	},
	{
		name: 'Ben',
		picture: 'https://www.bodybuilding.com/images/2016/december/Deadlifts-Should-You-Train-Them-With-Back-Or-Legs-graphics-1-640xh.jpg',
		color: '#ffcdd2',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3'
	},
	{
		name: 'Biceps',
		picture: 'http://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/bicep-flx.jpg?itok=2XQJq2Yi&timestamp=1422386260',
		color: '#dcedc8',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3'
	}
];

export default (state=init, action) => {
	return action.type === 'ADD_CARD'
		? [...state, action.payload]
		: state;
}