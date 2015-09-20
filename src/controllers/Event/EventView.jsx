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
			eventsMap: eventsGetters.eventsMap
		};
	},

	componentDidMount() {
		if(!this.state.userId) {
			this.history.pushState(null, "/login");
		}
	},

	render() {
		let current = this.state.eventsMap.get(this.props.params.id.toString());

		if(!current) {
			return <div></div>;
		}

		return <div className="card">
			<h1>Confirm your interest in {current.get("name")}</h1>
			<h2>{current.get("address")}</h2>

			<p>
				here are pictures of people
			</p>

			<p>
				logistics here
			</p>

			<button className="button button--text"
				onClick={() => { this.history.go(-1); }}>
				Back
			</button>

			<button className="button button--good"
				onClick={() => { 
					actions.interestEvent(this.props.params.id, this.state.userId);
					this.history.pushState(null, "/events");
				}}>
				I'm interested!
			</button>
		</div>;
	}
});

export default EventView;
