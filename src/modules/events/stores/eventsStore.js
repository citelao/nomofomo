import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable([]);
	},

	initialize() {
		this.on(actionTypes.GET_EVENTS_SUCCESS, updateEvents);
	}
});

function updateEvents(state, { events }) {
	return toImmutable(events);
}
