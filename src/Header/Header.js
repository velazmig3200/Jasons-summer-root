import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import headerCss from "./header.module.css";
import readings from "../readings";

function Header() {
	const [dropdownState, setDropdownState] = useState(false);

	return (
		<nav className={`${headerCss.header}`}>
			<div>
				<Link to="/" className={`${headerCss.a}`}>
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
					className={`${headerCss.hamburger}`}
					onClick={() => setDropdownState(!dropdownState)}>
					≡
					<Dropdown
						links={["Readings", "Home", "About"]}
						dropdownState={dropdownState}
					/>
				</button>
			</div>

			<div className={`${headerCss.linkContainer}`}>
				<a>Home</a>
				<button
					onClick={() => setDropdownState(!dropdownState)}
					className={`${headerCss.button}`}>
					Readings <span className={`${headerCss.downArrow}`}>^</span>
					<Dropdown
						links={readings.map(e => e.title)}
						dropdownState={dropdownState}
					/>
				</button>
			</div>
		</nav>
	);
}

export default Header;
