import React from "react";
import sourcesCss from "./sources.module.css";
import ExternalLinkIcon from "../../ExternalLinkIcon";
import { Link } from "react-router-dom";

function ReadingSources({ reading, pdf, audiobook }) {
	return (
		<main>
			<h1>{reading.title}</h1>
			<p>
				by {reading.author}{" "}
				{pdf && (
					<a target="_blank" href={pdf.link}>
						External PDF <ExternalLinkIcon />
					</a>
				)}
				{" | "}
				{audiobook && (
					<a target="_blank" href={audiobook.link}>
						Youtube Link <ExternalLinkIcon />
					</a>
				)}
			</p>
			<br />
			<br />

			<div className={`${sourcesCss.container}`}>
				{pdf ? (
					<Link to={pdf.path} className={`${sourcesCss.pdf}`}>
						<p className={`${sourcesCss.pdfLabel}`}>PDF</p>
						<img
							src={reading.coverImage}
							className={`${sourcesCss.img}`}
						/>
					</Link>
				) : null}

				{audiobook ? (
					<iframe
						className={`${sourcesCss.iframe}`}
						src={audiobook.src}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				) : null}
			</div>
		</main>
	);
}

export default ReadingSources;
