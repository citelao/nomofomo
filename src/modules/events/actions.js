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

export function createEvent(userId, name, location, description, startTime, duration, minAttendance) {
	var now = new Date();
	var startOfDayTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()) / 1000;
	var eventStartTime = startOfDayTimestamp + Number(startTime.split(":")[0]) * 60 * 60 + Number(startTime.split(":")[1]) * 60;
	qwest.post("http://whispering-sea-1365.herokuapp.com/events", {
		creator_id: userId,
		name: name,
		description: description,
		lat: 43.471856,
		lng: -80.538886,
		loc: location,
		min_attendance: minAttendance,
		start_time: eventStartTime,
		duration: duration
	}).then((xhr, result) => {
		let events = JSON.parse(result);
		reactor.dispatch(actionTypes.CREATE_EVENT_SUCCESS, { events });
	}, (error) => {
		reactor.dispatch(actionTypes.CREATE_EVENT_FAILURE, { error });
	});
}