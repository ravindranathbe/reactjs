import React from "react";

export const Main = (props) => {
	return(
		<div>
			<div className="row">
			<hr/>
				<button 
					className="btn btn-primary" 
					onClick={props.changeUsernameFn}
				>Change username</button>
			</div>
		</div>
	);
}