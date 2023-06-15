import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
