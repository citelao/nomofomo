import React from "react";
import qwest from "qwest";

export default class Event extends React.Component {
	render() {
		return <div className="card">
			<h1>Event title</h1>
			<h2>event location</h2>
			<img src="http://placehold.it/400x300" alt="a placeholder image"/>
		</div>;
	}
}
