import React from "react";
import { History } from "react-router";

import reactor from "../reactor";
import { getters, actions } from "../modules/session";

const LoginController = React.createClass({
	mixins: [reactor.ReactMixin, History],

	getDataBindings() {
		return {
			user: getters.user
		};
	},

	handleLogin() {
		debugger;
	},

	handleCancel() {
		this.history.go(-2);
	},

	render() {
		return <div className="card">
			<h1>Log in to join this event!</h1>
			<button onClick={this.handleLogin}>Log in</button>
			<button onClick={this.handleCancel}>Go back</button>
		</div>;
	}
});

export default LoginController;