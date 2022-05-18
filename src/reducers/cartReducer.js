export const cartReducer = (
	{ cart, totalQty, totalPrice },
	{ type, payload, product }
) => {
	switch (type) {
		case "ADD":
			cart = [...payload];
			totalQty = totalQty + 1;
			totalPrice.original += product.price.original;
			totalPrice.discount +=
				(product.price.original * product.price.percentageDiscount) / 100;

			return {
				cart,
				totalQty,
				totalPrice,
			};

		case "REMOVE":
			cart = [...payload];
			totalQty -= product.qty;

			totalPrice.original -= product.price.original * product.qty;
			totalPrice.discount -=
				(product.price.original *
					product.qty *
					product.price.percentageDiscount) /
				100;
			return { cart, totalQty, totalPrice };

		case "UPDATE":
			cart = [...payload];
			const prod = payload.find((p) => p._id === product._id);

			// Price calculation of quantity before update
			const prevOriginal = product.qty * product.price.original;
			const prevDiscount =
				(prevOriginal * product.price.percentageDiscount) / 100;

			// Price calculation of quantity after update
			const currentOriginal = prod.qty * prod.price.original;
			const currentDiscount =
				(currentOriginal * product.price.percentageDiscount) / 100;

			totalPrice.original += currentOriginal - prevOriginal;
			totalPrice.discount += currentDiscount - prevDiscount;
			totalQty += prod.qty - product.qty;
			return { cart, totalQty, totalPrice };

		case "RESET":
			return { ...payload };

		default:
			return { cart, totalQty, totalPrice };
	}
};
