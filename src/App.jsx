import GoogleMapsLoader from "google-maps";
import React from "react";
import { Link } from "react-router";

export default class Event extends React.Component {
	componentWillMount() {
		GoogleMapsLoader.load((google) => {
			new google.maps.Map(React.findDOMNode(this.refs.wrapper), {
				center: {lat: 45.50867, lng: -73.553992},
				scrollwheel: false,
				zoom: 8,
				disableDefaultUI: true
			});
		});
	}

	render() {
		return <div>
			<div className="test" ref="wrapper" style={{position: "absolute", top: 0, bottom: 0, height: "100%", width: "100%", zIndex: -1}}></div>
			<div className="wrapper">
				{this.props.children}
				<Link to="/events/create" className="card card--bottom">Create Event</Link>
			</div>
		</div>;
	}
}
