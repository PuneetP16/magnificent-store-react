import { v4 as uuid } from "uuid";
import {
	bat1,
	bat2,
	bat3,
	ball1,
	ball2,
	ball3,
	bag1,
	bag2,
	bag3,
	pad1,
	pad2,
	pad3,
	banner1,
	banner2,
	banner3,
	cloth1,
	cloth2,
	cloth3,
	helmet1,
	helmet2,
	helmet3,
	shoe1,
	shoe2,
	shoe3,
} from "../../data/image/productImages";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "MRF Genius 360 Cricket Bat 2022",
		price: {
			original: 20000,
			discounted: 15000,
			percentageDiscount: 25,
		},
		src: bat1,
		categoryName: "bats",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "MRF Wizard Power Edition Cricket Bat 2022",
		price: {
			original: 18000,
			discounted: 13500,
			percentageDiscount: 25,
		},
		src: bat2,
		categoryName: "bats",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "MRF Legend VK 18 2.0 Cricket Bat 2022",
		price: {
			original: 16000,
			discounted: 14400,
			percentageDiscount: 10,
		},
		src: bat3,
		categoryName: "bats",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "NIVIA 2.0 Cricket Ball 2022",
		price: {
			original: 900,
			discounted: 720,
			percentageDiscount: 20,
		},
		src: ball1,
		categoryName: "balls",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Hammer Core Yellow Cricket Ball",
		price: {
			original: 900,
			discounted: 720,
			percentageDiscount: 20,
		},
		src: ball2,
		categoryName: "balls",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Hammer Pro/Match Pink Cricket Ball",
		price: {
			original: 1000,
			discounted: 800,
			percentageDiscount: 20,
		},
		src: ball3,
		categoryName: "balls",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "SS Sunridges Military Cricket Kit Bag",
		price: {
			original: 3100,
			discounted: 2480,
			percentageDiscount: 20,
		},
		src: bag1,
		categoryName: "bags",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "SS Sunridges Navy Cricket Kit Bag",
		price: {
			original: 3000,
			discounted: 2400,
			percentageDiscount: 20,
		},
		src: bag2,
		categoryName: "bags",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "SG Combo Cricket Kit Bag",
		price: {
			original: 3500,
			discounted: 3150,
			percentageDiscount: 10,
		},
		src: bag3,
		categoryName: "bags",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Premium White Full Sleeves Cricket Shirt",
		price: {
			original: 4500,
			discounted: 3375,
			percentageDiscount: 25,
		},
		src: cloth1,
		categoryName: "clothes",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Premium Indian Team Cricket Shirt",
		price: {
			original: 5500,
			discounted: 4125,
			percentageDiscount: 25,
		},
		src: cloth2,
		categoryName: "clothes",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "White Indian Team Cricket Shirt",
		price: {
			original: 5500,
			discounted: 4125,
			percentageDiscount: 25,
		},
		src: cloth3,
		categoryName: "clothes",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Shrey Standard Cricket Helmet",
		price: {
			original: 5500,
			discounted: 4125,
			percentageDiscount: 25,
		},
		src: helmet1,
		categoryName: "helmets",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Shrey Standard 2 Cricket Helmet",
		price: {
			original: 5000,
			discounted: 3750,
			percentageDiscount: 25,
		},
		src: helmet2,
		categoryName: "helmets",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Shrey Groove Cricket Helmet",
		price: {
			original: 5500,
			discounted: 4500,
			percentageDiscount: 25,
		},
		src: helmet3,
		categoryName: "helmets",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "SG RSD Cricket Batting Pads",
		price: {
			original: 5500,
			discounted: 4500,
			percentageDiscount: 25,
		},
		src: pad1,
		categoryName: "pads",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "SG RSD Cricket Batting Pads",
		price: {
			original: 5500,
			discounted: 4500,
			percentageDiscount: 25,
		},
		src: pad1,
		categoryName: "pads",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Hammer Cricket Batting Pads",
		price: {
			original: 5500,
			discounted: 4675,
			percentageDiscount: 25,
		},
		src: pad1,
		categoryName: "pads",
		inStock: true,
	},
	{
		_id: uuid(),
		title: "Hammer Teal Cricket Batting Pads",
		price: {
			original: 5500,
			discounted: 4500,
			percentageDiscount: 25,
		},
		src: pad1,
		categoryName: "pads",
		inStock: true,
	},
];
