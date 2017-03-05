import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.age,
			status: 0,
			// defHomeLinkText: 'Default'
			defHomeLinkText: props.initialHomeLinkText
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 5000);
		console.log('=In constructor=', new Date().toString());
	}
	componentWillMount() {
		console.log('=In component will mount=', new Date().toString());	
	}
	componentDidMount() {
		console.log('=In component did mount=', new Date().toString());	
	}
	componentWillReceiveProps(nextProps) {
		console.log('=In component will receive props=', new Date().toString(), nextProps);	
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('=In should component update=', new Date().toString(), nextProps, nextState);
		if(nextState.status === 1)
			return false;

		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('=In component will update=', new Date().toString(), nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('=In component did update=', new Date().toString(), prevProps, prevState);
	}
	componentWillUnmount() {
		console.log('=In component will unmount=', new Date().toString());
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeHomeLinkText() {
		this.props.changeHomeLinkText(this.state.defHomeLinkText);
	}

	onHandleChange(ev) {
		this.setState({
			defHomeLinkText: ev.target.value
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
				<button type="button" onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				<button type="button" onClick={this.props.greet} className="btn btn-primary">Greet</button>

				<hr/>
				<input type="text" 
					// value={this.props.initialHomeLinkText} 
					value={this.state.defHomeLinkText}
					//onChange={this.onHandleChange.bind(this)}
					onChange={(ev) => this.onHandleChange(ev)}
					/>
				<button type="button" onClick={() => this.onChangeHomeLinkText()} className="btn btn-primary">Change Text</button>

				{this.props.children}

			</div>
			);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	school: React.PropTypes.object,
	children: React.PropTypes.element.isRequired,
	greet: React.PropTypes.func,
	initialHomeLinkText: React.PropTypes.string
}