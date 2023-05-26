import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import headerCss from "./header.module.css";
import readings from "../readings";

function Header() {
	const currentPage = useLocation().pathname;
	const previousPage = `/${currentPage.split("/").slice(1, -1)}`;
	const [dropdownState, setDropdownState] = useState(false);

	window.addEventListener("click", e => {
		if (e.target.id.includes("dropdown")) return;
		if (!dropdownState) return;
		setDropdownState(false);
	});

	return (
		<nav className={`${headerCss.header}`}>
			<div>
				{currentPage == "/" ? (
					<Link to="/" className={`${headerCss.summer}`}>
						Summer{" "}
						<span className={`${headerCss.readingGroup}`}>
							Reading Group
						</span>
					</Link>
				) : (
					<Link to={previousPage} className={`${headerCss.a}`}>
						<b className={`${headerCss.leftArrow}`}>^</b> Back
					</Link>
				)}
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
					Readings <b className={`${headerCss.downArrow}`}>^</b>
				</button>
			</div>

			<Dropdown links={readings} dropdownState={dropdownState} />
		</nav>
	);
}

export default Header;
