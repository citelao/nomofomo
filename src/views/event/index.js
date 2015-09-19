import React from "react";
import qwest from "qwest";

export default class Event extends React.Component {
	constructor() {
		super();

		qwest.get("https://whispering-sea-1365.herokuapp.com/hello")
			.then((xhr, resp) => {
				console.log(resp);
			});

		// qwest.post("http://api.yelp.com/v2/search", {
		// 	"term": "cream puff",
		// 	"location": "San Francisco"
		// })
		// 	.then((xhr, resp) => {
		// 		console.log(resp);
		// 	});
	}

	render() {
		return <div className="card">
			<h1 onClick={this.fn}>Event title</h1>
			<h2>event location</h2>
			<img src="http://placehold.it/400x300" alt="a placeholder image"/>
		</div>;
	}
}
