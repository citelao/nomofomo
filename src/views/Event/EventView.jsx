import React from "react";

export default class EventView extends React.Component {
	render() {
		return <div>
			A single event!
			{this.props.children}
		</div>;
	}
}
