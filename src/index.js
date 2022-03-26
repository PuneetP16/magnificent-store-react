import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
	AuthProvider,
	CartProvider,
	LoaderProvider,
	MagnificentProvider,
	ThemeProvider,
	UserProvider,
	WishlistProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<MagnificentProvider>
			<App />
		</MagnificentProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
