import React from "react";
import sourcesCss from "./sources.module.css";
import ExternalLinkIcon from "../../ExternalLinkIcon";
import { Link } from "react-router-dom";

function ReadingSources({ reading }) {
	return (
		<main>
			<h1>{reading.title}</h1>
			<p>
				by {reading.author}{" "}
				{reading.pdf && (
					<a target="_blank" href={reading.pdf.link}>
						External PDF <ExternalLinkIcon />
					</a>
				)}
				{" | "}
				{reading.audiobook && (
					<a target="_blank" href={reading.audiobook.link}>
						Youtube Link <ExternalLinkIcon />
					</a>
				)}
			</p>
			<br />
			<p>{reading.assignment}</p>
			<br />
			<br />

			<div className={`${sourcesCss.container}`}>
				{reading.pdf ? (
					<div className={`${sourcesCss.pdf}`}>
						<p className={`${sourcesCss.pdfLabel}`}>PDF</p>
						<Link to={"pdf"} className={`${sourcesCss.pdfLink}`}>
							<img
								src={reading.coverImage}
								className={`${sourcesCss.img}`}
							/>
						</Link>
					</div>
				) : null}

				{reading.excerpt ? (
					<div className={`${sourcesCss.pdf}`}>
						<p className={`${sourcesCss.pdfLabel}`}>PDF</p>
						<Link
							to={"excerpt"}
							className={`${sourcesCss.pdfLink}`}>
							<img
								src={reading.excerpt.coverImage}
								className={`${sourcesCss.img}`}
							/>
						</Link>
					</div>
				) : null}

				{reading.audiobook ? (
					<iframe
						className={`${sourcesCss.iframe}`}
						src={reading.audiobook.src}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				) : null}
			</div>
		</main>
	);
}

export default ReadingSources;
