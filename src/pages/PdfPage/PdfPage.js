import React from "react";
import pdfCss from "./pdf.module.css";

function PdfPage({ pdfLink, altText }) {
	return (
		<iframe
			className={`${pdfCss.pdf}`}
			type="application/pdf"
			src={`https://docs.google.com/viewer?url=${pdfLink}&embedded=true`}
            alt="altText"
		/>
	);
}

export default PdfPage;
