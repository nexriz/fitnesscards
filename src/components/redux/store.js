import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';

const reducers = combineReducers({
	user
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;