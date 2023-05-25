import React from "react";
import pdfCss from "./pdf.module.css";

function PdfPage({ pdfLink, altText }) {
	console.log(pdfLink);
	return (
		<iframe
			className={`${pdfCss.pdf}`}
			type="application/pdf"
			src={pdfLink}
		/>
	);
}

export default PdfPage;
