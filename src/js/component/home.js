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

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Gerdeth")
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				this.setState({
					taskListed: data
				});
			});
	}

	updateTask = event => {
		this.setState({ task: event.target.value });
	};
	saveTask = event => {
		if (event.keyCode === 13) {
            const newArr = [...this.state.taskListed];
            let newObject={label:this.state.task, done: false }
            }
			newArr.push(this.state.task);
			this.setState({
				taskListed: newArr,
				task: ""
            });
            fetch("https://assets.breatheco.de/apis/fake/todos/user/Gerdeth",{
                    method: 'PUT', 
                    body: JSON.stringify(newArr), 
                    headers:{
                        'Content-Type': 'application/json'
                            }
                }
                )
                .then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
                            
                            
                        
	};
	deleteFunctionHandler = id => {
		const returnArr = this.state.taskListed.filter(
			(i, index) => index !== id
		);
		this.setState({ taskListed: returnArr });
	};

	render() {
		const listDisplay = this.state.taskListed.map((object, index) => {
			return (
				<ListTasks
					key={index}
					task={object.label}
					deleteFunction={this.deleteFunctionHandler}
					id={index}
				/>
			);
		});
		// console.log(this.state.taskListed);
		return (
			<div className="container-fluid">
				<div className="container">
					<h1> To Do</h1>
					<input
						value={this.state.task}
						onChange={this.updateTask}
						onKeyUp={this.saveTask}
						placeholder="What needs to be done"
					/>
					<br />
					<br />
					<ul>
						{this.state.taskListed.length ? (
							listDisplay
						) : (
							<li> No tasks, add a task</li>
						)}
					</ul>
				</div>
			</div>
		);
	};
}
