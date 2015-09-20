import React from "react";

export default class Interested extends React.Component {

	render() {
		let users = [];
		for (let i = 0; i < this.props.minAttendance; i++) {
			users.push(<img src="http://placehold.it/60" alt="a placeholder image"/>);
		}

		return <div className="card">
			<h1>{this.props.title}</h1>
			{users}
		</div>;
	}
}
