import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import NomoFomo from "NomoFomo";
import App from "App";
import Pitch from "views/Pitch";
import EventsView from "views/EventsView";
import EventView from "views/Event/EventView";
import EventCreate from "views/Event/EventCreate";
import EventList from "views/Event/EventList";


function wrapComponent(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
}

const nomo = new NomoFomo();
nomo.start(() => {
	console.log(nomo);
	React.render(
		(<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Pitch} />
				<Route path="events" component={EventsView}>
					<IndexRoute component={wrapComponent(EventList, { events: nomo.state.events })} />
					<Route path="create" component={EventCreate} />
					<Route path=":id" component={EventView} />
				</Route>
			</Route>

			<Route path="*" component={App} />{/* better 404 eventually */}
		</Router>),
		document.body
	);
});