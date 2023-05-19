import React from "react";
import { Link } from "react-router-dom";
{
	/* <ScheduleItem
    week="1"
    title="Discourse on Colonialism by Aime Cesaire."
    note="Book pages 31-78, ignore the intro and the interview at the end."
    sourceLinks={[
        {
            to: "/discourse-on-colonialism-pdf",
            name: "PDF",
            type: "route"
        },
        {
            to: "https://l.messenger.com/l.php?u=https%3A%2F%2Fyoutu.be%2FxBt3kkjD978&h=AT1_K24wwQpk1Jqme1lDfqwYLtu7EIrGOQSpbFBMl3S6Nv8hrhduKeN6CfkySW4OiqgMP-4VxLi-OXZMMGZOVdZISPGgNmBD51id1E3HzkGh6Jozj2bb2IE0fs0a_ABUGFG0g5OvlJi_6V_EdIZ3tw",
            name: "Audiobook (YouTube)"
        }
    ]}
    embed={
        <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/xBt3kkjD978"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
    }
/> */
}

function ScheduleItem({ week, title, note, sourceLinks, embed }) {
	function getSourceLinks() {
		let result = [];
		for (let i in sourceLinks) {
			if ((sourceLinks.name = "route")) {
				result.push(
					<Link key={result.length} to={sourceLinks[i].to}>
						{sourceLinks[i].name}
					</Link>
				);
			} else {
				result.push(
					<a
						key={result.length}
						target="_blank"
						href={sourceLinks[i].to}>
						{sourceLinks[i].name}
					</a>
				);
			}
			i < sourceLinks.length - 1 && result.push(" | ");
		}
		return result;
	}

	return (
		<p>
			<b>Week {week}:</b> {title} {note} {getSourceLinks()}
			<br /> <br />
			{embed}
		</p>
	);
}

export default ScheduleItem;
