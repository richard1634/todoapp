import React, { Component } from 'react';
import './style.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			todos: [],
			input: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.setState({
			todos: [...this.state.todos, this.state.input],
			input: ''
		})
	}

	handleChange = (event) => {
		this.setState({
			input: event.target.value
		})
	}


	render() {
		console.log(this.state)

		const todo_map = this.state.todos.map((item, index) => {
			return(
				<div key={index} className="todo-item" >
					<p> <span>{index}:</span> {item}</p>
				</div>
			)
		})

		return (
			<div className="container" >
				<form onSubmit={this.handleSubmit}>
					<div className="add-group" >
						<label htmlFor="title">Enter a new to-do item: </label>
						<input onChange={this.handleChange} value={this.state.input} id="title" type="text"/>
					</div>

					<button className="submit-button">Create new to-do item!</button>
				</form>

				<div className="list-container" >
					<h3>My to-do list:</h3>
					{todo_map}
				</div>
			</div>
		);
	}
}

export default App;
