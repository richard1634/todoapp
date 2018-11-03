import React, { Component } from 'react';

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
				<div key={index}>
					<p> <span>{index}:</span> {item}</p>
				</div>
			)
		})

		return (
			<div>
				<form onSubmit={this.handleSubmit} >
					<label htmlFor="title">Todo:</label>
					<input onChange={this.handleChange} value={this.state.input} id="title" type="text"/>

					<div>
						<h3>My to-do list:</h3>
						{todo_map}
					</div>
				</form>
			</div>
		);
	}
}

export default App;
