import React from "react";
import pdfCss from "./pdf.module.css";

function PdfPage({ pdfLink, altText }) {
	return (
		<object
			className={`${pdfCss.pdf}`}
			data={pdfLink}
			type="application/pdf"
			alt={altText}></object>
	);
}

export default PdfPage;
