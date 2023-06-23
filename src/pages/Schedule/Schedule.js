import React from "react";
import ScheduleItem from "./ScheduleItem";
import scheduleCss from "./schedule.module.css";
import scheduleData from "../../scheduleData";

function Schedule() {
	function sections() {
		let result = [];
		for (let i in scheduleData) {
			result.push(
				<section key={i} className={`${scheduleCss.section}`}>
					<h2>{scheduleData[i].topic}</h2>
					{scheduleItems(scheduleData[i].items)}
				</section>
			);
		}
		return result;
	}
	function scheduleItems(items) {
		let result = [];
		for (let i in items) {
			result.push(<ScheduleItem key={i} item={items[i]} />);
		}
		return result;
	}

	return (
		<>
			<h1>Schedule</h1>
			<p>First Meeting May 21</p>
			{sections()}
		</>
	);
}

export default Schedule;
