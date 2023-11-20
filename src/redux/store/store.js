/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

//reducers
import cartReducer from '../reducers/cartReducer';

const rootReducer = combineReducers({
	cartData: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
