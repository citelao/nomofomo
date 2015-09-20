import qwest from "qwest";

import { apiURL } from "../../constants";
import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getEvents() {
	reactor.dispatch(actionTypes.GET_EVENTS, {});

	qwest.get(apiURL + "/events").then((xhr, result) => {
		reactor.dispatch(actionTypes.GET_EVENTS_SUCCESS, { result });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_EVENTS_FAILURE, { error });
	});
}
