import axios from 'axios';

export default function setAuthorizationToken(token) {
	token 
		? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	    : delete axios.defaults.headers.common['Authorization'];
}