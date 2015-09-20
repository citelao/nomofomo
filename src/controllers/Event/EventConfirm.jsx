import React from "react";
import { History } from "react-router";

import reactor from "../../reactor";
import actionTypes from '../../modules/events/actionTypes.js';

import { getters, actions } from "../../modules/session";

const EventConfirm = React.createClass({
	mixins: [reactor.ReactMixin, History],
	getDataBindings() {
		return {
			user: getters.userId
		};
	},

	render() {
		return <div className="card">
			<h1>You've scheduled a new activity!</h1>
			<h2>Now comes the waiting game...</h2>
		</div>;
	}
});

export default EventConfirm;
