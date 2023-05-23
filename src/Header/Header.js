import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import headerCss from "./header.module.css";
import readings from "../readings";

function Header() {
	const readingLinks = readings.map(e => {
		return { title: e.title, path: e.path };
	});
	const [dropdownState, setDropdownState] = useState(false);

	window.addEventListener("click", e => {
		if (e.target.id.includes("dropdown")) return;
		if (!dropdownState) return;
		setDropdownState(false);
	});

	return (
		<nav className={`${headerCss.header}`}>
			<div>
				<Link to="/" className={`${headerCss.summer}`}>
					Summer{" "}
					<span className={`${headerCss.readingGroup}`}>
						Reading Group
					</span>
				</Link>
			</div>

			<div className={`${headerCss.iconContainer}`}>
				<Link to="/" className={`${headerCss.homeIcon}`}>
					⌂
				</Link>
				<button
					id="dropdown-1"
					className={`${headerCss.hamburger}`}
					onClick={() => setDropdownState(!dropdownState)}>
					≡
					<Dropdown
						links={readingLinks}
						dropdownState={dropdownState}
					/>
				</button>
			</div>

			<div className={`${headerCss.linkContainer}`}>
				<Link to="/" style={{ textDecoration: "none" }}>
					Home
				</Link>
				<button
					id="dropdown-2"
					onClick={() => setDropdownState(!dropdownState)}
					className={`${headerCss.button} 
                    ${dropdownState ? headerCss.borderBottom : null}`}>
					Readings <span className={`${headerCss.downArrow}`}>^</span>
					<Dropdown
						links={readingLinks}
						dropdownState={dropdownState}
					/>
				</button>
			</div>
		</nav>
	);
}

export default Header;
