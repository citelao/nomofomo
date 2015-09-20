import React from "react";
import { History } from "react-router";

import reactor from "../../reactor";
import { getters } from "../../modules/session";
import { getters as eventsGetters, actions } from "../../modules/events";

const EventView = React.createClass({
	mixins: [reactor.ReactMixin, History],

	getDataBindings() {
		return {
			userId: getters.userId,
		};
	},

	componentDidMount() {
		if(!this.state.userId) {
			this.history.pushState(null, "/login");
		}
	},

	render() {
		return <div className="card">
			<h1>you are interested in something!</h1>
			<h2>so proud</h2>

			<p>
				here are pictures of people
			</p>

			<p>
				logistics here
			</p>

			<p onClick={() => { actions.interestEvent(1, this.state.userId)}}> a biggg confirm button</p>
		</div>;
	}
});

export default EventView;
