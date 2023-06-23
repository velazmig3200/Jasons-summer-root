import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReadingSources from "./pages/ReadingSources/ReadingSources";
import PdfPage from "./pages/PdfPage/PdfPage";
import Header from "./Header/Header";
import appCss from "./App.module.css";
import readingsData from "./readingsData";
import SummerImg1 from "./Summer-img-1.jpg";
import filterPath from "./filterPath";

function App() {
	function buildRoute() {
		let result = [];
		for (let i in readingsData) {
			let path = filterPath(readingsData[i].title);
			result.push(
				<Route
					key={result.length}
					path={path}
					element={<ReadingSources reading={readingsData[i]} />}
				/>
			);

			if (readingsData[i].pdf) {
				const pdfPath = `${filterPath(readingsData[i].title)}/pdf`;
				result.push(
					<Route
						key={result.length}
						path={pdfPath}
						element={
							<PdfPage
								pdfLink={readingsData[i].pdf.link}
								altText={readingsData[i].pdf.alt}
							/>
						}
					/>
				);
			}

			if (readingsData[i].excerpt) {
				const excerptPath = `${filterPath(
					readingsData[i].title
				)}/excerpt`;
				result.push(
					<Route
						key={"e" + result.length}
						path={excerptPath}
						element={
							<PdfPage
								pdfLink={readingsData[i].excerpt.link}
								altText={readingsData[i].excerpt.alt}
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
