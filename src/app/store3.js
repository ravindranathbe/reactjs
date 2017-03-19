import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import mathReducer from "./reducers3/mathReducer";
import userReducer from "./reducers3/userReducer";

const myLogger = (store) => (next) => (action) => {
	console.log('Action::', action.type);
	next(action);
};

const store = createStore(
	combineReducers({mathReducer, userReducer}), 
	{}, 
	applyMiddleware(logger())
	);

store.subscribe(() => {
	// console.log('Store updated', store.getState());
});

/*store.dispatch({
	type: "ADD",
	payload: 100
});

store.dispatch({
	type: "ADD",
	payload: 22
});

store.dispatch({
	type: "SUBTRACT",
	payload: 80
});

store.dispatch({
	type: "SET_NAME",
	payload: "Nancy"
});*/

export default store;