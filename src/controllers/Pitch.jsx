import React from "react";
import { Link } from "react-router";

export default class Pitch extends React.Component {
	render() {
		return <div>
			<div className="card">
				<img src="logo.png" alt="nomo fomo: because people want to hang out with you."/>
			</div>
			<Link to="/events" className="card card--hover">Start searching!</Link>
		</div>;
	}
}


