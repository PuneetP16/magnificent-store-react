import { useContext, createContext } from "react";
import {
	AuthProvider,
	CartProvider,
	LoaderProvider,
	ThemeProvider,
	UserProvider,
	WishlistProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";

const MagnificentContext = createContext();

export const useMagnificent = () => useContext(MagnificentContext);

export const MagnificentProvider = ({ children }) => {
	const value = "";
	return (
		<MagnificentContext.Provider value={value}>
			<BrowserRouter>
				<UserProvider>
					<WishlistProvider>
						<CartProvider>
							<LoaderProvider>
								<AuthProvider>
									<ThemeProvider>{children}</ThemeProvider>
								</AuthProvider>
							</LoaderProvider>
						</CartProvider>
					</WishlistProvider>
				</UserProvider>
			</BrowserRouter>
		</MagnificentContext.Provider>
	);
};
