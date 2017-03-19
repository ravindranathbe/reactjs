import React from "react";

export const User = (props) => {
	return(
		<div>
			<div className="row">
				<h3>User info</h3>
			</div>
			<div className="row">
				<p>Username: {props.username}</p>
			</div>
		</div>
	);
}