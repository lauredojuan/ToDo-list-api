import React from "react";
import { PropTypes } from "prop-types";
export function ListTasks(props) {
	return (
		<li>
			{props.task}{" "}
			<span>
				<i
					className="fa fa-trash"
					onClick={() => props.deleteFunction(props.id)}
				/>
			</span>
		</li>
	);
}
ListTasks.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	deleteFunction: PropTypes.func
};
