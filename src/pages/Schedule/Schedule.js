import React from "react";
import ScheduleItem2 from "./ScheduleItem2";
import scheduleCss from "./schedule.module.css";
import readings from "../../readings";
import scheduleData from "../../scheduleData";
import scheduleData1 from "../../scheduleData1";

function Schedule() {
	function sections() {
		let result = [];
		for (let i in scheduleData1) {
			result.push(
				<section key={i} className={`${scheduleCss.section}`}>
					<h2>{scheduleData1[i].topic}</h2>
					{scheduleItems(scheduleData1[i].items)}
				</section>
			);
		}
		return result;
	}
	function scheduleItems(items) {
		let result = [];
		for (let i in items) {
			result.push(<ScheduleItem2 key={i} item={items[i]} />);
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
