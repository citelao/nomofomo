import qwest from "qwest";

import { apiURL } from "../../constants";
import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getEvents() {
	reactor.dispatch(actionTypes.GET_EVENTS, {});
	qwest.get(apiURL + "/events").then((xhr, result) => {
		let events = JSON.parse(result);
		
		reactor.dispatch(actionTypes.GET_EVENTS_SUCCESS, { events });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_EVENTS_FAILURE, { error });
	});
}

export function createEvent(name, description, durationHrs, location, time, minAttendance) {
	duration = durationHrs * 60 * 60;
	params = "?creator_id=12345&name=" + name + "&description=" + description + "event description&lat=43.471856&lng=-80.538886" +
	"&loc=" + location + "&min_attendance=" + minAttendance + "&start_time=" + time + "&duration=" + duration;
	qwest.post(apiURL + "/events/" + params).then((xhr, result) => {
		let events = JSON.parse(result);
		alert(events);
		//reactor.dispatch(actionTypes.CREATE_EVENTS_SUCCESS, { events });
	}, (error) => {
		//reactor.dispatch(actionTypes.CREATE_EVENTS_FAILURE, { error });
	});
	alert(params)
	//getEvents();
}

export function swipeEvent(decision) {
	reactor.dispatch(actionTypes.SWIPE_EVENT, {});
}
