import React from "react";
// import { Link } from "react-router";

export default class Event extends React.Component {
	render() {
		return <div>
			A single event!
			{this.props.children}
		</div>;
	}
}
