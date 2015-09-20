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
			<br />

			<label htmlFor="create_description">
				Event description
				<input type="text" id="create_description" />
			</label>
			<br />
			<table> 
				<tr>
					<td className="third-width">
						<label htmlFor="create_time">
						Event time
						<input type="time" id="create_time" />
						</label>
					</td>
					<td className="third-width">
						<label htmlFor="create_duration">
						Event duration (hours)
						<input type="text" id="create_duration" placeholder="1"/>
						</label>
					</td>
					<td className="third-width">
						<label htmlFor="min_duration">
						Minimum attendance
						<input type="text" id="min_duration" placeholder="3"/>
						</label>
					</td>
				</tr>
			</table>
			<br />

			<input type="submit" value="Create!"/>

			{this.props.children}
		</div>;
	}
}
