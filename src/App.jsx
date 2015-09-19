import assign from "object-assign";
import GoogleMapsLoader from "google-maps";
import React from "react";
import { Link } from "react-router";

import reactor from "reactor";
import { getters } from "modules/session";

const App = React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			location: getters.location
		};
	},

	componentWillMount() {
		if(this.state.location) {
			GoogleMapsLoader.load((google) => {
				new google.maps.Map(React.findDOMNode(this.refs.wrapper), {
					center: {lat: this.state.location.toJS().coords.latitude, lng: this.state.location.toJS().coords.longitude},
					scrollwheel: false,
					zoom: 8,
					disableDefaultUI: true
				});
			});
		}
	},

	componentWillUpdate(nextProps, nextState) {
		if((!this.state.location) && (nextState.location)) {
			GoogleMapsLoader.load((google) => {
				new google.maps.Map(React.findDOMNode(this.refs.wrapper), {
					center: {lat: nextState.location.coords.latitude, lng: nextState.location.coords.longitude},
					scrollwheel: false,
					zoom: 8,
					disableDefaultUI: true
				});
			});	
		}
	},

	render() {
		return <div>
			<div className="wrapper">
				{this.props.children}
				<Link to="/events/create" className="card card--bottom">Create Event</Link>
			</div>
			<div className="map" ref="wrapper"></div>
		</div>;
	}
});

export default App;
