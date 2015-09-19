import reactor from "../../reactor";
import actionTypes from "./actionTypes";

export function getLocation() {
	reactor.dispatch(actionTypes.GET_LOCATION, {});

	navigator.geolocation.getCurrentPosition((location) => {
		reactor.dispatch(actionTypes.GET_LOCATION_SUCCESS, { location });
	}, (error) => {
		reactor.dispatch(actionTypes.GET_LOCATION_FAILURE, { error });
	});
}