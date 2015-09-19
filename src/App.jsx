import React from "react";
import { Link } from "react-router";

export default class Event extends React.Component {
	render() {
		return <div>
			<Link to="/events/create">Create Event</Link>
			<Link to="/events">View Event</Link>
			{this.props.children}
		</div>;
	}
}
