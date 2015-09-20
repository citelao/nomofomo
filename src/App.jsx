import assign from "object-assign";
import GoogleMapsLoader from "google-maps";
import React from "react";
import { Link } from "react-router";

import reactor from "reactor";
import { getters as sessionGetters } from "modules/session";
import { getters as eventGetters } from "modules/events";

const App = React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			location: sessionGetters.location,
			currentEvent: eventGetters.currentEvent
		};
	},

	componentWillMount() {
		if(this.state.currentEvent.get("lat")) {
			loadMap(React.findDOMNode(this.refs.map),
				this.state.currentEvent.get("lat"),
				this.state.currentEvent.get("lng"),
				15);
		} else {
			if(this.state.location && this.state.location.toJS) {
				loadMap(React.findDOMNode(this.refs.map),
					this.state.location.toJS().coords.latitude,
					this.state.location.toJS().coords.longitude,
					17);
			}
		}
	},

	componentWillUpdate(nextProps, nextState) {
		if(this.state.currentEvent.get("lat") !== nextState.currentEvent.get("lat")) {
			loadMap(React.findDOMNode(this.refs.map),
				nextState.currentEvent.get("lat"),
				nextState.currentEvent.get("lng"),
				15);
		}

		if(!this.state.currentEvent.get("lat") &&
			!this.state.location && 
			nextState.location) {
			loadMap(React.findDOMNode(this.refs.map),
				nextState.location.coords.latitude,
				nextState.location.coords.longitude, 17);
		}
	},

	render() {
		return <div>
			<div className="wrapper">
				{this.props.children}
				<Link to="/events/create" className="card card--hover">Create Event</Link>
			</div>
			<div className="map" ref="map"></div>
		</div>;
	}
});

function loadMap(el, lat, lng, zoom) {
	GoogleMapsLoader.load((google) => {
		el.style.position = "absolute";

		let map = new google.maps.Map(el, {
			center: {lat: parseFloat(lat), lng: parseFloat(lng)},
			scrollwheel: false,
			zoom: zoom,
			disableDefaultUI: true,
			draggable: false,
			zoomControl: false,
			disableDoubleClickZoom: true
		});

		google.maps.event.addListener(map, "tilesloaded", function(){
			el.style.position = "fixed";
		});
	});
}

export default App;
