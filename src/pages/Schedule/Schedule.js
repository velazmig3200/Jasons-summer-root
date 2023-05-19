import React from "react";
import { Link } from "react-router-dom";
import ScheduleItem2 from "./ScheduleItem2";
import scheduleCss from "./schedule.module.css";

function Schedule() {
	return (
		<>
			<p>First Meeting May 20</p>
			<section className={`${scheduleCss.section}`}>
				<h3>Post Colonialism</h3>
				<ScheduleItem2
					week="1"
					title="Discourse on Colonialism"
					routeTo={"/discourse-on-colonialism"}
					note="by Aime Cesaire. Book pages 31-78, ignore the intro and the interview at the end."
				/>
				<ScheduleItem2
					week="2"
					title="Black Skin, White Masks"
					routeTo={"/black-skin-white-masks"}
					note="by Frantz Fanon. Book pages not pdf Pages 9-40. (Intro & Ch.1)"
				/>
				<ScheduleItem2
					week="3"
					title="Orientalism"
					routeTo={"/orientalism"}
					note="by Edward Said. Book pages 1-28. (Intro & Ch.1)"
				/>
				<ScheduleItem2
					week="4"
					title="Pedagogy of the Oppressed"
					routeTo={"/pedagogy-of-the-oppressed"}
					note="by Paulo Freire. Book pages 43-86. (Ch.1 & Ch.2)"
				/>
			</section>
			<section className={`${scheduleCss.section}`}>
				<h3>Queer theory, Feminism, Animal Studies?</h3>
				<ScheduleItem2 week="5" />
				<ScheduleItem2 week="6" />
				<ScheduleItem2 week="7" />
				<ScheduleItem2 week="8" />
			</section>
		</>
	);
}

export default Schedule;
