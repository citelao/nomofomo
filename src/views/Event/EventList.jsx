import React from "react";

import reactor from "../../reactor";
import Event from "../../components/event";

import { getters, actions } from "../../modules/events";

const EventList = React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			events: getters.events
		};
	},

	componentWillMount() {
		actions.getEvents();
	},

	render() {
		return <Event title={this.state.events} />;
	}
});

export default EventList;
