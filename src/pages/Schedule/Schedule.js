import React from "react";
import ScheduleItem2 from "./ScheduleItem2";
import scheduleCss from "./schedule.module.css";
import readings from "../../readings";

function Schedule() {
	function buildScheduleItems(start, end) {
		start -= 1;
		end -= 1;
		let result = [];

		for (let i = start; i <= end; i++) {
			if (!readings[i]) {
				result.push(<ScheduleItem2 key={i} week={i + 1} />);
			} else {
				result.push(
					<ScheduleItem2
						key={i}
						week={i + 1}
						title={readings[i].title}
						author={` by ${readings[i].author}. `}
						routeTo={readings[i].path}
						note={readings[i].note}
					/>
				);
			}
		}
		return result;
	}

	return (
		<>
			<p>First Meeting May 20</p>
			<section className={`${scheduleCss.section}`}>
				<h3>Post Colonialism</h3>

				{buildScheduleItems(1, 4)}
			</section>
			<section className={`${scheduleCss.section}`}>
				<h3>Queer theory, Feminism, Animal Studies?</h3>
				{buildScheduleItems(5, 8)}
			</section>
		</>
	);
}

export default Schedule;
