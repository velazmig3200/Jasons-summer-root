import React from "react";
import { Link } from "react-router-dom";
import readingsData from "../../readingsData";
import filterPath from "../../filterPath";

function ScheduleItem2({ item }) {
	const currentReading = readingsData.find(e => {
		if (!e.title) return;
		if (!item.reading) return;
		if (e.title.toLowerCase() == item.reading.toLowerCase()) return e;
	});
	const path = currentReading && filterPath(currentReading.title);

	return (
		<p>
			<b>{item.title ? `${item.title}:` : null} </b>
			{currentReading ? (
				<Link to={path} style={{ textDecoration: "none" }}>
					<span style={{ textDecoration: "underline" }}>
						{currentReading.title}
					</span>{" "}
					<span style={{ color: "white" }}>
						by {currentReading.author}. {currentReading.assignment}
					</span>
				</Link>
			) : item.reading ? (
				<span>{item.reading}..?</span>
			) : null}
		</p>
	);
}

export default ScheduleItem2;
