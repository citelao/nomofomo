import qwest from "qwest";

import { apiURL } from "../../constants";
import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getEvents(user) {
	reactor.dispatch(actionTypes.GET_EVENTS, {});

	let narrow = (user) ? "/" + user : "";

	qwest.get(apiURL + "/events" + narrow).then((xhr, result) => {
		let events = JSON.parse(result);

		reactor.dispatch(actionTypes.GET_EVENTS_SUCCESS, { events, user });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_EVENTS_FAILURE, { error });
	});
}

export function declineEvent(eventId, userId) {
	if(!eventId) {
		throw new TypeError("no event");
	}

	if(!userId) {
		throw new TypeError("no user");
	}

	reactor.dispatch(actionTypes.DECLINE_EVENT, { id: eventId });

	qwest.post(apiURL + "/events/" + eventId + "/rejected/" + userId).then((xhr, result) => {
		reactor.dispatch(actionTypes.DECLINE_EVENT_SUCCESS, { id: eventId });
	}, (error) => {
		reactor.dispatch(actionTypes.DECLINE_EVENT_FAILURE, { id: eventId, error });
	});
}


export function interestEvent(eventId, userId) {
	if(!eventId) {
		throw new TypeError("no event");
	}

	if(!userId) {
		throw new TypeError("no user");
	}

	reactor.dispatch(actionTypes.INTEREST_EVENT, { id: eventId });

	qwest.post(apiURL + "/events/" + eventId + "/interested/" + userId).then((xhr, result) => {
		reactor.dispatch(actionTypes.INTEREST_EVENT_SUCCESS, { id: eventId });
	}, (error) => {
		reactor.dispatch(actionTypes.INTEREST_EVENT_FAILURE, { id: eventId, error });
	});	
}