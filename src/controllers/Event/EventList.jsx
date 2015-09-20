import React from "react";
import { History } from "react-router";

import reactor from "../../reactor";
import Event from "../../components/event";
import Interested from "../../components/interested";

import { getters as eventsGetters, actions } from "../../modules/events";
import { getters as sessionGetters } from "../../modules/session";

const EventList = React.createClass({
	mixins: [reactor.ReactMixin, History],

	getDataBindings() {
		return {
			event: eventsGetters.currentEvent,
			interested: eventsGetters.interested,
			userId: sessionGetters.userId
		};
	},

	componentWillMount() {
		actions.getEvents(this.state.userId);
	},

	handleDecline() {
		actions.declineEvent(this.state.event.get("id"), this.state.userId);
	},

	handleInterested() {
		this.history.pushState(null, `/events/${this.state.event.get("id")}`);
	},

	render() {

		let interests = [];
		for (var i = this.state.interested.toJS().length - 1; i >= 0; i--) {
			let current = this.state.interested.get(i);
			interests.push(<Interested
				title={current.get("name")}
				minAttendance={current.get("min_attendance")} />);
		}

		return <div>
			{interests}
			<Event title={this.state.event.get("name")}
				picture={this.state.event.get("picture")}
				address={this.state.event.get("address")}
				latitude={this.state.event.get("lat")}
				longitude={this.state.event.get("lng")}
				description={this.state.event.get("description")}
				minAttendance={this.state.event.get("min_attendance")}
				interested={(this.state.event.get("interested_users") || {}).size}
				onDecline={this.handleDecline}
				onInterested={this.handleInterested} />
		</div>;
	}
});

export default EventList;
