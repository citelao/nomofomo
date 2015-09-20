import React from "react";
import { History } from "react-router";

import reactor from "../../reactor";
import { getters } from "../../modules/session";

const EventView = React.createClass({
	mixins: [reactor.ReactMixin, History],

	getDataBindings() {
		return {
			user: getters.user
		};
	},

	componentDidMount() {
		if(!this.state.user.get("id")) {
			this.history.pushState(null, "/login");
		}
	},

	render() {
		return <div>
			A single event!
			{this.props.children}
		</div>;
	}
});

export default EventView;