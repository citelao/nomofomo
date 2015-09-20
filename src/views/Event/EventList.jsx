import React from "react";

import reactor from "../../reactor";
import Event from "../../components/event";

import { getters, actions } from "../../modules/events";

const EventList = React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			event: getters.currentEvent
		};
	},

	componentWillMount() {
		actions.getEvents();
	},

	handleSwipe() {
		actions.swipeEvent();
	},

	render() {
		return <div onClick={this.handleSwipe}>
		<Event title={this.state.event.get("name")} />
		</div>;
	}
});

export default EventList;
