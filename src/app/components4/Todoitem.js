import React from "react";

export class Todoitem extends React.Component {
	constructor() {
		super();
	}
	onHandleTodoRemove(todoId) {
		this.props.removeTodo(todoId);
	}
	onHandleTodoEdit(todoId) {
		this.props.editTodo(todoId);	
	}

	render() {
		return(
			<li 
				className="list-group-item" 
				data-todoId={this.props.todoId}
			>{this.props.todo} 
				<span className="badge"><span 
					className="glyphicon glyphicon-remove"
					onClick={(todoId) => this.onHandleTodoRemove(this.props.todoId)}
				></span></span>
				<span className="badge"><span 
					className="glyphicon glyphicon-pencil"
					onClick={(todoId) => this.onHandleTodoEdit(this.props.todoId)}
				></span></span>
			</li>
		);
	}
}