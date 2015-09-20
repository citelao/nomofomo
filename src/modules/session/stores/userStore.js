import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable({
			id: null
		});
	},

	initialize() {
		this.on(actionTypes.LOGIN_USER, updateUser);
	}
});

function updateUser(state, { user }) {
	return user;
}
