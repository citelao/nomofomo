import React from "react";
// import { Link } from "react-router";

import Event from "modules/event";

export default class Events extends React.Component {
	render() {
		return <div>
			<h1>Events</h1>

			<Event />

			{this.props.children}
		</div>;
	}
}
