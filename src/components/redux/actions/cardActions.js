import axios from 'axios';
axios.defaults.baseURL = 'localhost:8080';

const addCard = (card) => {
	return {
		type: 'ADD_CARD',
		payload: card
	}
}

export const fetchCards = (query) => {
	return dispatch => {
		axios.post('http://localhost:8080/api/card', query)
			.then(res => {
				dispatch(addCard(res.data));
			})
			.catch(err => console.log(err, 'tets'))
	}
} 