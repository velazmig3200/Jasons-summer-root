import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PdfPage from "./pages/PdfPage/PdfPage";
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
				<Route
					path="/discourse-on-colonialism"
					element={<div>/discourse-on-colonialism</div>}
				/>
				<Route
					path="/discourse-on-colonialism/pdf"
					element={
						<PdfPage
							pdfLink={
								"https://files.libcom.org/files/zz_aime_cesaire_robin_d.g._kelley_discourse_on_colbook4me.org_.pdf"
							}
							altText="Discourse on Colonialism pdf"
						/>
					}
				/>

				<Route
					path="/black-skin-white-masks/pdf"
					element={
						<PdfPage
							pdfLink={
								"https://abahlali.org/files/__Black_Skin__White_Masks__Pluto_Classics_.pdf"
							}
							altText="Black Skin, White Masks pdf"
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
