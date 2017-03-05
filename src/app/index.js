// console.log('debug');
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: 'Home',
			isHomeMounted: true
		}
	}
	onGreet() {
		alert('Hi!');
	}
	onChangeLinkText(newText) {
		this.setState({
			homeLink: newText
		});
	}
	onChangeHomeMounted() {
		this.setState({
			isHomeMounted: !this.state.isHomeMounted
		});
	}

	render() {
		var school = {
			'name': 'ABC School',
			'country': 'India',
			'hobbies': ['Reading', 'Writing']
		};
		let homeComponent = '';
		if(this.state.isHomeMounted) {
			homeComponent = <Home 
					name={"Abi"} 
					age={10} 
					school={school} 
					greet={this.onGreet}
					// changeHomeLinkText={this.onChangeLinkText.bind(this)}
					changeHomeLinkText={(newText) => this.onChangeLinkText(newText)}
					initialHomeLinkText = {this.state.homeLink}
				><hr/>
				</Home>;
		}

		return (
			<div className="row col-md-4 col-xs-12">
				<div className="row">
					<Header homeLinkText={this.state.homeLink}/>
				</div>
				{homeComponent}
				<div className="row">
					{ /*<Home name={"Mia"} age={11} school={school}>
						<hr/>
					</Home>*/ }
				</div>
				<div className="row">
					<button onClick={() => this.onChangeHomeMounted()} type="button" className="btn btn-danger">Unmount Home Component</button>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));