import React from "react";
// import { Link } from "react-router";

import Event from "modules/event";

export default class Events extends React.Component {
	render() {
		return <div>
			{this.props.children}
		</div>;
	}
}