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
import { ScrollToTopProvider } from "./scrollToTopContext";

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
											<ScrollToTopProvider>
												<ThemeProvider>{children}</ThemeProvider>
											</ScrollToTopProvider>
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
