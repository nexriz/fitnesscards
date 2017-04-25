import { createStore, combineReducers } from 'redux';
import user from './reducers/user';

const reducers = combineReducers({
	user
})

const store = createStore(reducers);

export default store;