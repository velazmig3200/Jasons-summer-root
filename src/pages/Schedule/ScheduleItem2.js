import React from "react";
import { Link } from "react-router-dom";
import readings from "../../readings";
import filterPath from "../../filterPath";

// function ScheduleItem2({ week, title, author, routeTo, note }) {
// 	return (
// 		<p>
// 			<b>Week {week}: </b>
// 			<Link to={routeTo}>{title}</Link> {author} {note}
// 		</p>
// 	);
// }
function ScheduleItem2({ item }) {
	const currentReading = readings.find(e => {
		if (!e.title) return;
		if (!item.reading) return;
		if (e.title.toLowerCase() == item.reading.toLowerCase()) return e;
	});

	return (
		<p>
			<b>{item.title ? `${item.title}:` : null} </b>
			{currentReading ? (
				<Link style={{ textDecoration: "none" }}>
					{currentReading.title}{" "}
					<span style={{ color: "white" }}>
						by {currentReading.author}. {currentReading.note}
					</span>
				</Link>
			) : null}
		</p>
	);
}

export default ScheduleItem2;
