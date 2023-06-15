import React from "react";
import ScheduleItem2 from "./ScheduleItem2";
import scheduleCss from "./schedule.module.css";
import readings from "../../readings";
import scheduleData from "../../scheduleData";
import scheduleData1 from "../../scheduleData1";

function Schedule() {
	// function buildScheduleItems(start, end) {
	// 	start -= 1;
	// 	end -= 1;
	// 	let result = [];

	// 	for (let i = start; i <= end; i++) {
	// 		if (!readings[i]) {
	// 			result.push(<ScheduleItem2 key={i} week={i + 1} />);
	// 		} else {
	// 			result.push(
	// 				<ScheduleItem2
	// 					key={i}
	// 					week={i + 1}
	// 					title={readings[i].title}
	// 					author={` by ${readings[i].author}. `}
	// 					routeTo={readings[i].path}
	// 					note={readings[i].note}
	// 				/>
	// 			);
	// 		}
	// 	}
	// 	return result;
	// }

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

	// return (
	// 	<>
	// 		<h1>Schedule</h1>
	// 		<p>First Meeting May 21</p>
	// 		<section className={`${scheduleCss.section}`}>
	// 			<h3>Post Colonialism</h3>

	// 			{buildScheduleItems(1, 4)}
	// 		</section>
	// 		<section className={`${scheduleCss.section}`}>
	// 			<h3>Queer theory, Feminism, Animal Studies?</h3>
	// 			{buildScheduleItems(5, 8)}
	// 		</section>
	// 	</>
	// );
	return (
		<>
			<h1>Schedule</h1>
			<p>First Meeting May 21</p>
			{sections()}
		</>
	);
}

export default Schedule;
