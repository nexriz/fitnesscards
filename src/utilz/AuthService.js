import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router-dom';

class AuthService {
	contructor(clientId, domain) {
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
				redirectUrl: 'http://localhost:3000/login',
				responseType: 'token'
			}
		})

		this.lock.on('authenticated', ::this._doAuthentication);

		this.login = ::this.login
	}

	_doAuthentication(authResult) {
		// Saves the user token
		this.setToken(authResult.idToken)
		// navigate to the home route
		this.props.history.replace('/')
	}

	login() {
		// Call the show method to display the widget.
		this.lock.show()
	}

	loggedIn() {
		// Checks if there is a saved token and it's still valid
		return !!this.getToken()
	}

	setToken(idToken) {
		// Saves user token to local storage
		localStorage.setItem('id_token', idToken)
	}

	getToken() {
		// Retrieves the user token from local storage
		return localStorage.getItem('id_token')
	}

	logout() {
		// Clear user token and profile data from local storage
		localStorage.removeItem('id_token');
	}
}

export default withRouter(AuthService)