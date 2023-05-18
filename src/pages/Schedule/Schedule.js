import React from "react";
import { Link } from "react-router-dom";
import scheduleCss from "./schedule.module.css";

function Schedule() {
	return (
		<>
			<p>First Meeting May 20</p>
			<section className={`${scheduleCss.section}`}>
				<h3>Post Colonialism</h3>
				<p>
					Week 1:{" "}
					<Link> Discourse on Colonialism by Aime Cesaire</Link>
				</p>
				{/* <object
					data="https://files.libcom.org/files/zz_aime_cesaire_robin_d.g._kelley_discourse_on_colbook4me.org_.pdf"
					type="application/pdf"
					width="500px"
					height="500px"
					alt="Discourse on Colonialism pdf"></object> */}
				<p>
					Week 2: Black Skin, White Masks (Intro & Ch.1) Frantz Fanon
				</p>
				<p>Week 3: Orientalism (Intro & Ch.1) by Edward Said</p>
				<p>Week 4: Pedagogy of the Oppressed (Ch.1) by Paulo Freire</p>
			</section>
			<section className={`${scheduleCss.section}`}>
				<h3>Queer theory, Feminism, Animal Studies?</h3>
				<p>Week 5: </p>
				<p>Week 6: </p>
				<p>Week 7: </p>
				<p>Week 8: </p>
			</section>
		</>
	);
}

export default Schedule;
