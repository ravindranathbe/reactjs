import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-4 xs-md-4">
						<Header/>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-4 xs-md-4">
						{this.props.children}
					</div>
				</div>
			</div>	
		);
	}
}
