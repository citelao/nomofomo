import React from "react";
import { Router, Route } from "react-router";

import App from "App";
import Events from "views/Events";
import Event from "views/Event/Event";
import EventCreate from "views/Event/EventCreate";

React.render(
	(<Router>
		<Route path="/" component={App}>
		</Route>

		<Route path="/events" component={Events}>
			<Route path="create" component={EventCreate} />
			<Route path=":id" component={Event} />
		</Route>

		<Route path="*" component={App} />{/* better 404 eventually */}
	</Router>),
	document.body
);
