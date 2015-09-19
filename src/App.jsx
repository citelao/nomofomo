import assign from "object-assign";
import GoogleMapsLoader from "google-maps";
import React from "react";
import { Link } from "react-router";

import SessionActions from "actions/SessionActions";

export default class App extends React.Component {
	componentWillMount() {
		navigator.geolocation.getCurrentPosition((l) => {
			console.log(l.coords);

			GoogleMapsLoader.load((google) => {
				new google.maps.Map(React.findDOMNode(this.refs.wrapper), {
					center: {lat: l.coords.latitude, lng: l.coords.longitude},
					scrollwheel: false,
					zoom: 8,
					disableDefaultUI: true
				});
			});
		});
	}

	render() {
		return <div>
			<div className="wrapper">
				{this.props.children}
				<Link to="/events/create" className="card card--bottom">Create Event</Link>
			</div>
			<div className="map" ref="wrapper"></div>
		</div>;
	}
}
