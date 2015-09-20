import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return null;
	},

	initialize() {
		this.on(actionTypes.GET_EVENTS_SUCCESS, resetCurrent);
		this.on(actionTypes.SWIPE_EVENT, incrementCurrent);
	}
});

function resetCurrent() {
	return 0;
}

function incrementCurrent(old) {
	return old + 1;
}
