import React from "react";

export class User extends React.Component {
	render() {
		return(
			<div>
				<div className="row">
					<h3>User info</h3>
				</div>
				<div className="row">
					<p>Username: {this.props.username}</p>
				</div>
			</div>
		);
	}
}