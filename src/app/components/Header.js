import React from "react";

export const Header = (props) => {
	return(
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><a href="#">{props.homeLinkText}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};