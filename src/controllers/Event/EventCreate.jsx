import React from "react";
import qwest from "qwest";
import { History } from "react-router";

import reactor from "../../reactor";
import actionTypes from '../../modules/events/actionTypes.js';

import { getters, actions } from "../../modules/session";
import { actions as eventActions } from "../../modules/events";

const EventCreate = React.createClass({
	
	mixins: [reactor.ReactMixin, History],
	getDataBindings() {
		return {
			user: getters.userId
		};
	},


	handleSubmit(e) {
		var name = React.findDOMNode(e.target).elements[0].value;
		var location = React.findDOMNode(e.target).elements[1].value;
		var description = React.findDOMNode(e.target).elements[2].value;
		var startTime = React.findDOMNode(e.target).elements[3].value;
		var duration = 60 * 60 * Number(React.findDOMNode(e.target).elements[4].value);
		var minAttendance = React.findDOMNode(e.target).elements[5].value;
		eventActions.createEvent(this.state.user, name, location, description, startTime, duration, minAttendance);
		this.history.pushState(null, "/events/confirm");
    },

	render() {
		return <div className="card card--overlay">
			<form className="formElem" onSubmit={this.handleSubmit}>
			<label htmlFor="create_name">
				Event Name
				<input type="text" id="create_name" name="create_name" ref="create_name"/>
			</label>
			<br />

			<label htmlFor="create_location">
				Event location
				<input type="text" id="create_location" name="create_location" ref="create_location"/>
			</label>
			<br />

			<label htmlFor="create_description">
				Event description
				<input type="text" id="create_description" name="create_description" ref="create_description" />
			</label>
			<br />
			<table> 
				<tr>
					<td className="third-width">
						<label htmlFor="create_time">
						Event time
						<input type="time" id="create_time" name="create_time" ref="create_time"/>
						</label>
					</td>
					<td className="third-width">
						<label htmlFor="create_duration">
						Event duration (hours)
						<input type="text" id="create_duration" name="create_duration" ref="create_duration" placeholder="1"/>
						</label>
					</td>
					<td className="third-width">
						<label htmlFor="min_attendance">
						Minimum attendance
						<input type="text" id="min_attendance" name="min_attendance" ref="min_attendance" placeholder="3"/>
						</label>
					</td>
				</tr>
			</table>
			<br />

			<input type="submit" value="Create!"/>
			</form>
			{this.props.children}
		</div>;
	}
});

export default EventCreate;
