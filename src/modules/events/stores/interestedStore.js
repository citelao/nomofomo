import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable({});
	},

	initialize() {
		this.on(actionTypes.GET_EVENTS_SUCCESS, updateEvents);
		this.on(actionTypes.DECLINE_EVENT, declineEvent);
	}
});

function updateEvents(state, { events, user }) {
	let newState = {};
	for (var i = events.length - 1; i >= 0; i--) {
		let evt = events[i];

		if(evt.interested_users.indexOf(user) !== -1) {
			newState[evt.id] = evt;
		}
	}

	return toImmutable(newState);
}

function declineEvent(state, { id }) {
	return state.delete(id.toString());
}
