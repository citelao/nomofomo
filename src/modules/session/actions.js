/* globals FB */
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

export function login() {
	reactor.dispatch(actionTypes.LOGIN_USER, {});

	if(FB) {
		FB.login((response) => {
			if(!response.status) {
				reactor.dispatch(actionTypes.LOGIN_USER_FAILURE, { response });
			} else {
				reactor.dispatch(actionTypes.LOGIN_USER_SUCCESS, { response });
			}
		});
	} else {
		reactor.dispatch(actionTypes.LOGIN_USER_FAILURE, { error: "No FB() present." });
	}
}

export function fetchLogin() {
	reactor.dispatch(actionTypes.GET_LOGIN, {});

	if(FB) {
		FB.getLoginStatus((response) => {
			if(!response.status) {
				reactor.dispatch(actionTypes.GET_LOGIN_FAILURE, { response });
			} else {
				reactor.dispatch(actionTypes.GET_LOGIN_SUCCESS, { response });
			}
		});
	} else {
		reactor.dispatch(actionTypes.GET_LOGIN_FAILURE, { error: "No FB() present." });
	}
}