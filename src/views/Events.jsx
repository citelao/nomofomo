import React from "react";
// import { Link } from "react-router";

export default class Events extends React.Component {
	render() {
		return <div>
			Events!
			{this.props.children}
		</div>;
	}
}
