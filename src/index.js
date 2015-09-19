import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import NomoFomo from "NomoFomo";
import App from "App";
import Pitch from "views/Pitch";
import EventsView from "views/EventsView";
import EventView from "views/Event/EventView";
import EventCreate from "views/Event/EventCreate";
import EventList from "views/Event/EventList";

const reactor = new Reactor({ debug: true });

reactor.registerStores({
	events,
	session
});

React.render(
	(<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Pitch} />
			<Route path="events" component={EventsView}>
				<IndexRoute component={EventList} />
				<Route path="create" component={EventCreate} />
				<Route path=":id" component={EventView} />
			</Route>
		</Route>

		<Route path="*" component={App} />{/* better 404 eventually */}
	</Router>),
	document.body
);