import React from "react";
import { Link } from "react-router-dom";
import dropdownCss from "./dropdown.module.css";

function Dropdown({ links, dropdownState }) {
	function getLinks() {
		let result = [];

		for (let i in links) {
			result.push(
				<Link to={links[i].path} key={i}>
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
