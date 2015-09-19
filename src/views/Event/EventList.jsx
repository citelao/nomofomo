import React from "react";

import reactor from "../../reactor";
import Event from "../../components/event";

const EventList = React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			// events: eventsGetter
		};
	},

	render() {
		return <Event title={this.props.events[0].name} />;
	}
});

export default EventList;