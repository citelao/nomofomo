import { Store, toImmutable } from "nuclear-js";

import actionTypes from "../actionTypes";

export default new Store({
	getInitialState() {
		return toImmutable({});
	},

	initialize() {
		this.on(actionTypes.CREATE_EVENT_SUCCESS, setEvent);
	}
});

function setEvent(old, { event }) {
	return event;
}