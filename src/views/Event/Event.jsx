import React from "react";

export default class Event extends React.Component {
	render() {
		return <div>
			A single event!
			{this.props.children}
		</div>;
	}
}
