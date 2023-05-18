import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Header/Header";
import appCss from "./App.module.css";
import SummerImg1 from "./Summer-img-1.jpg";

function App() {
	return (
		<>
			<div className={`${appCss.bgContainer}`}>
				<img src={SummerImg1} className={`${appCss.bg}`} />
			</div>

			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/" element={""} /> */}
			</Routes>
		</>
	);
}

export default App;
