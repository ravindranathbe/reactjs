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

import {createStore} from "redux";

const initialState = {
	result: 1,
	lastValues: [],
	username: 'Max'
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

store.subscribe(() => {
	console.log('Store updated', store.getState());
});

store.dispatch({
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
