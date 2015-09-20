/* globals FB */
import qwest from "qwest";

import reactor from "../../reactor";
import { apiURL } from "../../constants";
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
				FB.api("/me", { fields: ["picture", "name"] }, (r) => {
					qwest.post(apiURL + "/users", {
						id: response.authResponse.userID,
						photo: r.picture.data.url,
						name: r.name
					}).then((xhr, resp) => {
						reactor.dispatch(actionTypes.LOGIN_USER_SUCCESS, { response });
					}, (error) => {
						reactor.dispatch(actionTypes.LOGIN_USER_FAILURE, { error });
					});
				});
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
				FB.api("/me", { fields: ["picture", "name"] }, (r) => {
					qwest.post(apiURL + "/users", {
						id: response.authResponse.userID,
						picture: r.picture.data.url,
						name: r.name
					}).then((xhr, resp) => {
						reactor.dispatch(actionTypes.GET_LOGIN_SUCCESS, { response });
					}, (error) => {
						reactor.dispatch(actionTypes.GET_LOGIN_FAILURE, { error });
					});
				});
			}
		});
	} else {
		reactor.dispatch(actionTypes.GET_LOGIN_FAILURE, { error: "No FB() present." });
	}
}