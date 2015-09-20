import React from "react";

export default class EventCreate extends React.Component {
	render() {
		return <div className="card card--overlay">
			<label htmlFor="create_name">
				Event Name
				<input type="text" id="create_name" />
			</label>
			<br />

			<label htmlFor="create_location">
				Event location
				<input type="text" id="create_location" />
			</label>

			(map here)

			<input type="submit" value="Create!"/>

			{this.props.children}
		</div>;
	}
}
