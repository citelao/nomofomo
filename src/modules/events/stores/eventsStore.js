import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable([]);
	},

	initialize() {
		this.on(actionTypes.GET_LOCATION_SUCCESS, updateLocation);
	}
});

function updateLocation(state, { location }) {
	return state.set("geo", toImmutable(location));
}
