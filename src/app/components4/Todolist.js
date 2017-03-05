import React from "react";
import { Todoitem } from "./Todoitem";

export class Todolist extends React.Component {
	constructor() {
		super();
	}
	onHandleEditTodo(todoId) {
		this.props.editTodo(todoId);
	}
	onHandleRemoveTodo(todoId) {
		this.props.removeTodo(todoId);
	}

	render() {
		return(
			<div>
				<div className="row">
					<h3>List</h3>
					<ul className="list-group">
						{this.props.todos.map((todo, i) => 
								<Todoitem 
									key={i} 
									todoId={i} 
									todo={todo} 
									editTodo={(todoId) => this.onHandleEditTodo(todoId)}
									removeTodo={(todoId) => this.onHandleRemoveTodo(todoId)}
								/>
							)
						}
					</ul>
				</div>
			</div>
		);
	}
}