import React from "react";
import { History } from "react-router";

import reactor from "../../reactor";
import Event from "../../components/event";

import { getters, actions } from "../../modules/events";

const EventList = React.createClass({
	mixins: [reactor.ReactMixin, History],

	getDataBindings() {
		return {
			event: getters.currentEvent
		};
	},

	componentWillMount() {
		actions.getEvents();
	},

	handleDecline() {
		actions.swipeEvent();
	},

	handleInterested() {
		this.history.pushState(null, `/events/${this.state.event.get("id")}`);
	},

	render() {
		return <Event title={this.state.event.get("name")}
			picture={this.state.event.get("picture")}
			address={this.state.event.get("address")}
			latitude={this.state.event.get("lat")}
			longitude={this.state.event.get("lng")}
			description={this.state.event.get("description")}
			minAttendance={this.state.event.get("min_attendance")}
			onDecline={this.handleDecline}
			onInterested={this.handleInterested} />;
	}
});

export default EventList;
