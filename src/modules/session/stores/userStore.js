import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable({
			userID: null
		});
	},

	initialize() {
		this.on(actionTypes.LOGIN_USER_SUCCESS, updateUser);
		this.on(actionTypes.GET_LOGIN_SUCCESS, updateUser);
	}
});

function updateUser(state, { response }) {
	return toImmutable(response.authResponse);
}
