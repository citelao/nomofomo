import React from "react";

import Event from "../../modules/event";

export default class EventList extends React.Component {
	render() {
		return <Event title={this.props.events[0].name} />;
	}
}
