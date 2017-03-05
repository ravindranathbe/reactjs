/*
**
*	App name: Todo
*/
import React from "react";
import { render } from "react-dom";

import { Todoform } from "./components4/Todoform";
import { Todolist } from "./components4/Todolist";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [ // 'Print the resume',// 'Go to interview'
			],
			activeTodoText: ''
		};
	}
	onChangeTodoText(newTodo) {
		this.setState({
			todos: this.state.todos.concat(newTodo)
		});
	}
	onEditTodo(todoId) {
		this.setState({
  			activeTodoText: this.state.todos[todoId]
		});
	}
	onRemoveTodo(todoId) {
		this.state.todos.splice(todoId, 1);
		this.setState({
  			todos: this.state.todos
		});
	}
	
	render() {
		return(
			<div className="row col-md-4 col-xs-12">
				<Todoform 
					changeTodoText={(newTodo) => this.onChangeTodoText(newTodo)}
					activeTodo={this.state.activeTodoText}
				/>
				<Todolist 
					todos={this.state.todos} 
					editTodo={(todoId) => this.onEditTodo(todoId)}
					removeTodo={(todoId) => this.onRemoveTodo(todoId)}
				/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));