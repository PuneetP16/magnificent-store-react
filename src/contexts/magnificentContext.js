import { useContext, createContext } from "react";
import {
	AuthProvider,
	CartProvider,
	LoaderProvider,
	ThemeProvider,
	UserProvider,
	WishlistProvider,
	FilterProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./productContext";

const MagnificentContext = createContext();

export const useMagnificent = () => useContext(MagnificentContext);

export const MagnificentProvider = ({ children }) => {
	const value = "";
	return (
		<MagnificentContext.Provider value={value}>
			<BrowserRouter>
				<LoaderProvider>
					<AuthProvider>
						<UserProvider>
							<ProductProvider>
								<WishlistProvider>
									<CartProvider>
										<FilterProvider>
											<ThemeProvider>{children}</ThemeProvider>
										</FilterProvider>
									</CartProvider>
								</WishlistProvider>
							</ProductProvider>
						</UserProvider>
					</AuthProvider>
				</LoaderProvider>
			</BrowserRouter>
		</MagnificentContext.Provider>
	);
};
