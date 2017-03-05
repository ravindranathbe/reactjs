// console.log('debug');
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render() {
		var school = {
			'name': 'ABC School',
			'country': 'India',
			'hobbies': ['Reading', 'Writing']
		};

		return (
			<div className="row col-md-4 col-xs-12">
				<div className="row">
					<Header/>
				</div>
				<div className="row">
					<Home name={"Abi"} age={10} school={school}>
						<hr/>
					</Home>
					{ /*<Home name={"Mia"} age={11} school={school}>
						<hr/>
					</Home>*/ }
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));