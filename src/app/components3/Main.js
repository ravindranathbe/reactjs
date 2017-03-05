import React from "react";

export class Main extends React.Component {
	render() {
		return(
			<div>
				<div className="row">
				<hr/>
					<button 
						className="btn btn-primary" 
						onClick={this.props.changeUsernameFn}
					>Change username</button>
				</div>
			</div>
		);
	}
}