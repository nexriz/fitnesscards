import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import cards from './reducers/cards';

const reducers = combineReducers({
	user,
	cards
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;