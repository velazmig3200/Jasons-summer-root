import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReadingSources from "./pages/ReadingSources/ReadingSources";
import PdfPage from "./pages/PdfPage/PdfPage";
import Header from "./Header/Header";
import appCss from "./App.module.css";
import readings from "./readings";
import SummerImg1 from "./Summer-img-1.jpg";
import filterPath from "./filterPath";

function App() {
	function buildRoute() {
		let result = [];
		for (let i in readings) {
			let path = filterPath(readings[i].title);
			result.push(
				<Route
					key={result.length}
					path={path}
					element={
						<ReadingSources
							reading={readings[i]}
							pdf={readings[i].pdf}
							audiobook={readings[i].audiobook}
						/>
					}
				/>
			);

			if (readings[i].pdf) {
				result.push(
					<Route
						key={result.length}
						path={readings[i].pdf.path}
						element={
							<PdfPage
								pdfLink={readings[i].pdf.link}
								altText={readings[i].pdf.alt}
							/>
						}
					/>
				);
			}
		}
		return result;
	}

	return (
		<>
			<div className={`${appCss.bgContainer}`}>
				<img src={SummerImg1} className={`${appCss.bg}`} />
			</div>

			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				{buildRoute()}
			</Routes>
		</>
	);
}

export default App;
