import React from "react";
import qwest from "qwest";
import GoogleMapsLoader from "google-maps";

export default class Event extends React.Component {
	componentDidMount() {
		// GoogleMapsLoader.load((google) => {
		// 	new google.maps.Map(React.findDOMNode(this.refs.map), {
		// 		center: {lat: this.props.latitude, lng: this.props.longitude},
		// 		scrollwheel: false,
		// 		zoom: 18
		// 	});
		// });
	}

	render() {
		let users = [];
		for (let i = 0; i < this.props.minAttendance; i++) {
			users.push(<img src="http://placehold.it/60" alt="a placeholder image"/>);
		}

		return <div className="card">
			<h1>{this.props.title}</h1>
			<h2>{this.props.address}</h2>
			<img src={this.props.picture} alt="a placeholder image"/>
			{/*<div ref="map" style={{height: 250, width: "100%"}}></div>*/}
			{users}
			<p>{this.props.description}</p>
			<button className="button button--left button--bad" onClick={this.props.onDecline}>✗</button>
			<button className="button button--right button--good" onClick={this.props.onInterested}>✓</button>
			<div className="cf"></div>
		</div>;
	}
}
