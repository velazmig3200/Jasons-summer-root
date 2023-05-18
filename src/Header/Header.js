import React from "react";
import { Link } from "react-router-dom";
import headerCss from "./header.module.css";

function Header() {
	return (
		<nav className={`${headerCss.header}`}>
			<Link to="/" className={`${headerCss.a}`}>
				Summer Reading Group
			</Link>
		</nav>
	);
}

export default Header;
