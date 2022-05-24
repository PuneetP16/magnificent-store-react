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
import { ModalProvider } from "./modalContext";

const MagnificentContext = createContext();

export const useMagnificent = () => useContext(MagnificentContext);

export const MagnificentProvider = ({ children }) => {
	const value = "";
	return (
		<MagnificentContext.Provider value={value}>
			<BrowserRouter>
				<ThemeProvider>
					<LoaderProvider>
						<ModalProvider>
							<AuthProvider>
								<UserProvider>
									<ProductProvider>
										<WishlistProvider>
											<CartProvider>
												<FilterProvider>
													<ScrollToTopProvider>{children}</ScrollToTopProvider>
												</FilterProvider>
											</CartProvider>
										</WishlistProvider>
									</ProductProvider>
								</UserProvider>
							</AuthProvider>
						</ModalProvider>
					</LoaderProvider>
				</ThemeProvider>
			</BrowserRouter>
		</MagnificentContext.Provider>
	);
};
