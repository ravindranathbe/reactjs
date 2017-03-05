import React from "react";
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
				<User username={this.state.username}/>
				<Main changeUsernameFn={() => this.changeUsername('Ram')}/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));