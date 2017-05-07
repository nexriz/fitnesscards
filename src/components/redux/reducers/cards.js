let init = [
	{
		title: 'Övre Bröst',
		picture: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg',
		color: '#fffde7',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3',
		meta: {
			votes: 10,
			favs: 3
		}
	},
	{
		title: 'Ben',
		picture: 'https://www.bodybuilding.com/images/2016/december/Deadlifts-Should-You-Train-Them-With-Back-Or-Legs-graphics-1-640xh.jpg',
		color: '#ffcdd2',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3',
		meta: {
			votes: 10,
			favs: 3
		}
	},
	{
		title: 'Biceps',
		picture: 'http://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/bicep-flx.jpg?itok=2XQJq2Yi&timestamp=1422386260',
		color: '#dcedc8',
		exercises: 'test',
		alternative: 'test2',
		extra: 'test3',
		meta: {
			votes: 10,
			favs: 3
		}
	}
];

export default (state=init, action) => {
	switch(action.type) {
		case 'ADD_CARD':
			return [...state, ...action.payload]
		case 'SORT_CARDS':
			return [...action.payload]
		default:
			return state
	}
}