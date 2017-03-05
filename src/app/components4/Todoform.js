import React from "react";

export class Todoform extends React.Component {
	constructor(props) {
		super();
		this.state = {
			todoText: props.activeTodo,
			buttonText: 'Add'
		};
	}
	onHandleTodoChange(ev) {
		this.setState({
			todoText: ev.target.value
		});
	}
	onHandleTodoAdd() {
		this.props.changeTodoText(this.state.todoText);
		this.setState({
			todoText: ''
		});
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			todoText: nextProps.activeTodo
		});
	}

	render() {
		return(
			<div>
				<div className="row">
					<h3>Todo</h3>
					<form>
						<input type="text" 
							value={this.state.todoText} 
							onChange={(ev) => this.onHandleTodoChange(ev)}
							name="todoInput" 
							className="form-control"
						/><br/>
						<button 
							type="button" 
							name="todoButton" 
							className="btn btn-primary"
							// onClick={this.onHandleTodoAdd.bind(this)}
							onClick={() => this.onHandleTodoAdd()}
						>{this.state.buttonText}</button>
					</form>
				</div>
			</div>
		);
	}
}