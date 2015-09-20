import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "App";
import Pitch from "controllers/Pitch";
import EventsView from "controllers/EventsView";
import EventView from "controllers/Event/EventView";
import EventCreate from "controllers/Event/EventCreate";
import EventConfirm from "controllers/Event/EventConfirm";
import EventList from "controllers/Event/EventList";
import LoginController from "controllers/LoginController";

import { actions } from "modules/session";

actions.getLocation();

document.addEventListener("fb_init", function() {
	actions.fetchLogin();

	React.render(
		(<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Pitch} />
				<Route path="events" component={EventsView}>
					<IndexRoute component={EventList} />
					<Route path="create" component={EventCreate} />
					<Route path="confirm" component={EventConfirm} />
					<Route path=":id" component={EventView} />
				</Route>

				<Route path="login" component={LoginController} />
			</Route>

			<Route path="*" component={App} />{/* better 404 eventually */}
		</Router>),
		document.getElementById("entry")
	);
});
