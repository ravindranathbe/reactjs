/*import React from "react";
import { render } from "react-dom";

import { User } from "./components3/User";
import { Main } from "./components3/Main";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'Max'
		};
	}
	changeUsername(newName) {
		this.setState({
			username: newName
		});
	}
	render() {
		return(
			<div className="row col-md-4 col-xs-12">
				<Main changeUsernameFn={() => this.changeUsername('Ram')}/>
				<User username={this.state.username}/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));*/

import React from "react";
import { render } from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./containers3/App";

const initialState = {
	result: 1,
	lastValues: [],
	username: 'Max'
}

const mathReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD":
			// state = state + action.payload;
			// state.result += action.payload;
			/*state = {
				result: state.result,
				lastValues: state.lastValues
			};*/
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			// state.lastValues.push(action.payload);
			break;
		case "SUBTRACT":
			// state = state - action.payload;
			// state.result -= action.payload;
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			// state.lastValues.push(action.payload);
			break;
	}
	return state;
};

const userReducer = (state = {
	name: 'Max',
	age: 27
}, action) => {
	switch(action.type) {
		case "SET_NAME":
			state = {
				...state,
				name: action.payload
			}
			break;
		case "SET_AGE":
			state = {
				...state,
				age: action.payload
			}
			break;
	}
	return state;
};

const myLogger = (store) => (next) => (action) => {
	console.log('Action::', action.type);
	next(action);
};

const store = createStore(
	combineReducers({mathReducer, userReducer}), 
	{}, 
	applyMiddleware(logger()));

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

render(
	<Provider store={store}>
		<App/>	
	</Provider>,
	document.getElementById('app'));