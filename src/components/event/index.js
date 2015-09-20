import React from "react";
import qwest from "qwest";

export default class Event extends React.Component {
	render() {
		let users = [];
		for (let i = 0; i < this.props.minAttendance; i++) {
			users.push(<img src="http://placehold.it/60" alt="a placeholder image"/>);
		}

		return <div className="card">
			<h1>{this.props.title}</h1>
			<h2>TODO location</h2>
			<img src={this.props.picture} width="600" alt="a placeholder image"/>
			<br />
			{users}
			<p>{this.props.description}</p>
		</div>;
	}
}
