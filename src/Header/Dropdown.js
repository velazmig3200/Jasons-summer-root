import React from "react";
import { Link } from "react-router-dom";
import dropdownCss from "./dropdown.module.css";
import filterPath from "../filterPath";

function Dropdown({ links, dropdownState }) {
	function getLinks() {
		let result = [];

		for (let i in links) {
			result.push(
				<Link to={filterPath(links[i].title)} key={i}>
					{links[i].title}
				</Link>
			);
		}

		return result;
	}

	return (
		<div
			className={`${dropdownCss.container} 
            ${dropdownState ? dropdownCss.show : null}`}>
			{getLinks()}
		</div>
	);
}

export default Dropdown;
