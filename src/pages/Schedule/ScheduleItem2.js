import React from "react";
import { Link } from "react-router-dom";

function ScheduleItem2({ week, title, author, routeTo, note }) {
	return (
		<p>
			<b>Week {week}: </b>
			<Link to={routeTo}>{title}</Link> {author} {note}
		</p>
	);
}

export default ScheduleItem2;
