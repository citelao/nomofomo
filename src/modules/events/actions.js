import qwest from "qwest";

import { apiURL } from "../../constants";
import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getEvents(user) {
	reactor.dispatch(actionTypes.GET_EVENTS, {});

	let narrow = (user) ? "/1" : "";

	qwest.get(apiURL + "/events" + narrow).then((xhr, result) => {
		let events = JSON.parse(result);
		
		reactor.dispatch(actionTypes.GET_EVENTS_SUCCESS, { events });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_EVENTS_FAILURE, { error });
	});
}

export function swipeEvent(decision) {
	reactor.dispatch(actionTypes.SWIPE_EVENT, {});
}
