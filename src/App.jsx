import React from "react";
import { Link } from "react-router";

export default class Event extends React.Component {
	render() {
		return <div className="wrapper">
			<Link to="/events" className="box">Start searching!</Link>
			{this.props.children}
			<Link to="/events/create" className="box">Create Event</Link>
		</div>;
	}
}
