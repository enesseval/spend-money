import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
	name: "money",
	initialState: {
		firstMoney: 100000000,
		totalMoney: 100000000,
		items: [
			{
				img: "https://i.imgur.com/jImRpPw.jpg",
				name: "Airpods Pro",
				price: 249,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/LUyQhmF.jpg",
				name: "Nintendo Switch",
				price: 299,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/CugpEfY.jpg",
				name: "PS 5",
				price: 499,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/HgPROm3.jpg",
				name: "Xbox Series X",
				price: 499,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/qRRiCAY.jpg",
				name: "Samsung S23 Ultra 1TB",
				price: 1499,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/SH7FrjV.jpg",
				name: "iPhone 14 Pro Max 1TB",
				price: 1599,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/69V42nb.jpg",
				name: "MacBook Pro 14' M2 Max (64GB RAM | 4TB)",
				price: 4699,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/PXJj7z0.jpg",
				name: "Pro Gaming PC(I9 13900K, RTX 4090, 64GB, 4TB SSD)",
				price: 6950,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/TaO01Rv.jpg",
				name: "2023 Mac Studio M1 Ultra (128GB RAM | 8TB)",
				price: 6999,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/XrStrbb.jpg",
				name: "Razer Blade 14 Top spec (2023)",
				price: 2799,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/Kx4cEmk.jpg",
				name: "Mac Pro Top spec (2023) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)",
				price: 53799,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/2fWckgJ.jpg",
				name: "Ipad Air M1 Chip (2023) (256GB)",
				price: 749,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/PPRo68K.jpg",
				name: "Tesla Bot (Available 2024)",
				price: 2000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/e22zI0t.jpg",
				name: "Start your own StartUp",
				price: 5000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/PzvSI1z.jpg",
				name: "Open Fast Food Franchise",
				price: 1500000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/ldwb3kB.jpg",
				name: "Spotify for 80 years",
				price: 9600,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/qXETLS0.jpg",
				name: "Entire Steam library (2023 - No discounts)",
				price: 728000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/ndCJpQO.jpg",
				name: "Netflix for 80 Years",
				price: 15500,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/gLZoi2G.jpg",
				name: "Entire production of Nvidia GPUs for 2023",
				price: 800000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/iELtucq.jpg",
				name: "Influence 1 high ranking politician",
				price: 2000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/NemUFgb.jpg",
				mame: "Private Concert with ANY Super Star",
				price: 1000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/kym3viy.jpg",
				name: "Give 10,000 USD to 5000 people",
				price: 50000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/OWLoofS.jpg",
				name: "LG 88' OLED 8K ThinQ®",
				price: 19990,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/apb6YDR.jpg",
				name: "Fiat 500",
				price: 19000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/SfGExTq.jpg",
				name: "Toyota Camry",
				price: 29000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/4jSjHIo.jpg",
				name: "Ford F150 Raptor 2023",
				price: 65900,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/mJWmq7c.jpg",
				name: "Tesla Model S Plaid",
				price: 132000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/VcilGS4.jpg",
				name: "Cybertruck (Tri Motor)",
				price: 70000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/AHkboQ5.jpg",
				name: "Tesla Roadster 2023",
				price: 200000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/WzJBQ28.jpg",
				name: "Ferrari F8",
				price: 276000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/g9hStpM.jpg",
				name: "Lamborghini Aventador SVJ",
				price: 512000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/z3GMspz.jpg",
				name: "Bugatti La Voiture Noire",
				price: 11000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/fzz17Jh.jpg",
				name: "1000 Acres of land",
				price: 4100000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/hORfY2Y.jpg",
				name: "Private Island, Central America (medium size)",
				price: 4950000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/1DegErb.jpg",
				name: "Eating out for 80 years (4 meals/day)",
				price: 3100000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/sCfpUGZ.jpg",
				name: "Diamond Ring (Tiffany - 1 carat)",
				price: 17000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/tta1VSx.png",
				name: "Whisky Macallan Michael Dillon 1926",
				price: 1530000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/yOoFsVc.jpg",
				name: "Rolex",
				price: 12000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/7iKWz6P.jpg",
				name: "Les Femmes d’Alger by Picasso",
				price: 179400000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/7gJGSxO.jpg",
				name: "Monalisa by Leonardo da Vinci (estimate)",
				price: 869000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/PfondRN.jpg",
				name: "Helicopter Bell 206",
				price: 750000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/DSTtX6u.jpg",
				name: "10 plastic surgeries",
				price: 130000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/FTlLdn5.jpg",
				name: "One week in EVERY country of the planet",
				price: 1250000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/32IK5OT.jpg",
				name: "College Education (USA)",
				price: 170000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/NlZwVTY.jpg",
				name: "NFL Team (Average)",
				price: 3000000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/4Ri5Db3.jpg",
				name: "NBA Team (Average)",
				price: 2400000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/YTCSphH.jpg",
				name: "Formula 1 Team (Avarage)",
				price: 700000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/nzI2BgD.jpg",
				name: "Jet Gulfstream G450",
				price: 17000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/pQ5GHLq.jpg",
				name: "M1 Abrams",
				price: 8000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/gYFuXLE.jpg",
				name: "Produce a Hollywood Movie",
				price: 90000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/M1hLEQ4.jpg",
				name: "Regular Modern Apartment (3 bd, 2 ba)",
				price: 320000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/izKKBfM.jpg",
				name: "Paris Luxury Apartment(3 bd, 3 ba)",
				price: 3200000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/jUV3CMC.jpg",
				name: "L.A Home (5bd, 6ba)",
				price: 6000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/2dosPGH.jpg",
				name: "L.A Mega Mansion (8 bd, 20 ba)",
				price: 52000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/qtlfCFv.jpg",
				name: "Modern Building (35 condos + 10 Offices)",
				price: 12000000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/ucF5agb.jpg",
				name: "Sailboat",
				price: 130000,
				piece: 0,
			},
			{
				img: "https://i.imgur.com/ch7b6Yh.jpg",
				name: "Mega Yatch",
				price: 300000000,
				piece: 0,
			},
		],
	},
	reducers: {
		decrementPiece: (state, action) => {
			state.items[action.payload.index].piece = action.payload.value;
			state.totalMoney += state.items[action.payload.index].price;
		},
		incrementPiece: (state, action) => {
			state.items[action.payload.index].piece = action.payload.value;
			state.totalMoney -= state.items[action.payload.index].price;
		},
	},
});

export const { decrementPiece, incrementPiece } = moneySlice.actions;

export default moneySlice.reducer;
