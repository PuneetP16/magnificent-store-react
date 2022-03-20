import { v4 as uuid } from "uuid";
import {
	bags,
	balls,
	bats,
	helmets,
	pads,
	shoes,
	clothes
} from "../../data/image/productImages";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "bats",
		description:
			"The bat is usually made of willow with a long rectangular blade shaped like a paddle and a short handle used in cricket",
		src: bats,
	},
	{
		_id: uuid(),
		categoryName: "balls",
		description:
			"A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level",
		src: balls,
	},
	{
		_id: uuid(),
		categoryName: "helmet",
		description:
			"The cricket helmet is designed to stop serious injury occuring due to being hit on the head by the cricket ball.",
		src: helmets,
	},
	{
		_id: uuid(),
		categoryName: "pads",
		description:
			"Pads (also called leg guards) are protective equipment used by batters in the sport of cricket",
		src: pads,
	},
	// {
	// 	_id: uuid(),
	// 	categoryName: "clothes",
	// 	description:
	// 		"Cricket clothes are mostly the loose fitting clothes which are worn while playing cricket so as not to restrict the player's movement. ",
	// 	src: clothes,
	// },
	// {
	// 	_id: uuid(),
	// 	categoryName: "shoes",
	// 	description:
	// 		"A cricket shoe is usually made up of an artificial leather known as PU or polyurethane. It is extremely soft and flexible to ensure the free movement of the feet.",
	// 	src: shoes,
	// },
	{
		_id: uuid(),
		categoryName: "bags",
		description:
			"A cricket shoe is usually made up of an artificial leather known as PU or polyurethane. It is extremely soft and flexible to ensure the free movement of the feet.",
		src: bags,
	},
];
