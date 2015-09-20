import qwest from "qwest";

import { apiURL } from "../../constants";
import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getEvents(user) {
	reactor.dispatch(actionTypes.GET_EVENTS, {});

	let narrow = (user) ? "/1" : "";

	qwest.get(apiURL + "/events" + narrow).then((xhr, result) => {
		let events = JSON.parse(result);

		reactor.dispatch(actionTypes.GET_EVENTS_SUCCESS, { events, user: 1 });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_EVENTS_FAILURE, { error });
	});
}

export function declineEvent(eventId) {
	if(!eventId) {
		throw new TypeError("no event");
	}

	reactor.dispatch(actionTypes.DECLINE_EVENT, { id: eventId });

	qwest.post(apiURL + "/events/" + eventId + "/rejected/1").then((xhr, result) => {
		reactor.dispatch(actionTypes.DECLINE_EVENT_SUCCESS, { id: eventId });
	}, (error) => {
		reactor.dispatch(actionTypes.DECLINE_EVENT_FAILURE, { id: eventId });
	});
}
