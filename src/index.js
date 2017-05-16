import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from './App';
import store from './components/redux/store';



axios.defaults.baseURL = 'localhost:8080';


ReactDOM.render(
	<Provider store={store}>
  		<App />	
	</Provider>,
  document.getElementById('root')
);
