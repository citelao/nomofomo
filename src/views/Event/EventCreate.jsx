import React from "react";
// import { Link } from "react-router";

export default class Event extends React.Component {
	render() {
		return <div>
			Create an event
			{this.props.children}
		</div>;
	}
}
