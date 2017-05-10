import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtdecode from 'jwt-decode';

export function setCurrentUser(user) {
	return {
		type: "SET_CURRENT_USER",
		payload: user
	}
}

export function setUser(user) {
	return dispatch => {
		dispatch(setCurrentUser(user))
	}
}
export function login(user) {
	return dispatch => {
	const { name, pass } = user;
		axios
			.post('/auth', {username: name, password: pass})
			.then(res => {
				localStorage.setItem('jwtToken', res.data.token)
				setAuthorizationToken(res.data.token)
				dispatch(setCurrentUser(jwtdecode(res.data.token)))
			})
	}
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch(setCurrentUser(false));
	}
}