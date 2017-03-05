import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.age,
			status: 0
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 2000);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	render() {
		// console.log(this.props);

		let v1 = 'A sample text, whoo!!!';
		return(
			<div>
				{/* <p>In a component!</p>
				<p>2 + 2 = { 2 + 2 } { v1 }
					{ v1 == '' ? 'v1 is not set' : 'v1 is set' }
				</p> */}

				<p>Name: {this.props.name}</p>
				<p>Age: {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<p>School: {this.props.school.name + ', ' + this.props.school.country}</p>
				<ul>
					{this.props.school.hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}
				</ul>

				{/*<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>*/}
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>

				{this.props.children}

			</div>
			);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	school: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
}