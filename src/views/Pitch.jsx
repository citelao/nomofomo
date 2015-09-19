import React from "react";
import { Link } from "react-router";

export default class Pitch extends React.Component {
	render() {
		return <div>
			<div className="card">
				<h1>No Mo' FOMO</h1>
				<h2>Because other people want to hang out with you.</h2>
			</div>
			<Link to="/events" className="card">Start searching!</Link>
		</div>;
	}
}


