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
import store from "./store3";

render(
	<Provider store={store}>
		<App/>	
	</Provider>,
	document.getElementById('app'));