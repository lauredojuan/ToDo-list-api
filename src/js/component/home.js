import React from "react";

import { ListTasks } from "./listtasks";

//create your first component
export class Home extends React.Component {
	// create constructor to store variables
	// create an empty array inside of state
	//create a variable to hold input
	//input field in render must inclde event to store new task
	// create a ul li with default content "No tasks, add a task"
	// mapping function to go through array to use values
	// delete functionallity in each li (conditional statement for hover)
	constructor() {
		super();
		this.state = {
			task: "",
			taskListed: []
		};
	}

	updateTask = event => {
		this.setState({ task: event.target.value });
	};
	saveTask = event => {
		if (event.keyCode === 13) {
			const newArr = [...this.state.taskListed];
			newArr.push(this.state.task);
			this.setState({
				taskListed: newArr,
				task: ""
			});
		}
	};
	deleteFunctionHandler = id => {
		const returnArr = this.state.taskListed.filter(
			(i, index) => index !== id
		);
		this.setState({ taskListed: returnArr });
	};

	render() {
		// console.log(this.state.taskListed);
		return (
			<div className="container">
				<h1> To Do</h1>
				<input
					value={this.state.task}
					onChange={this.updateTask}
					onKeyUp={this.saveTask}
					placeholder="What needs to be done"
				/>
				<ul>
					{this.state.taskListed.map((liContent, index) => {
						return (
							<ListTasks
								key={index}
								task={liContent}
								deleteFunction={this.deleteFunctionHandler}
								id={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
