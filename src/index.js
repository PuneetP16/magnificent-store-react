import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
	AuthProvider,
	CartProvider,
	LoaderProvider,
	ThemeProvider,
	UserProvider,
	WishlistProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<WishlistProvider>
					<CartProvider>
						<LoaderProvider>
							<AuthProvider>
								<ThemeProvider>
									<App />
								</ThemeProvider>
							</AuthProvider>
						</LoaderProvider>
					</CartProvider>
				</WishlistProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
