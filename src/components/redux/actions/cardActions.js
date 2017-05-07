import axios from 'axios';
axios.defaults.baseURL = 'localhost:8080';

const addCard = (card) => {
	return {
		type: 'ADD_CARD',
		payload: card
	}
}

const sortCards = (cards) => {
	return {
		type: 'SORT_CARDS',
		payload: cards
	}
}
export const dispatchsortCards = (cards) => {
	return dispatch => {
		dispatch(sortCards(cards));
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