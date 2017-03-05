import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {
	onNavHome() {
		browserHistory.push("/");
	}

	render() {
		return(
			<div>
				<h3>The user page</h3>
				<p>User Id: {this.props.params.id}</p>
				<button className="btn btn-primary" onClick={this.onNavHome}>Go home!</button>
			</div>
		);
	}
}