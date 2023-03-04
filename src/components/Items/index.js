import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Items() {
	const items = useSelector((state) => state.money.items);

	const handleSell = (e) => {
		console.log(e.target.value);
	};

	const handleBuy = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className="items">
			{items.map((item) => (
				<div key={item.id} className="item_card">
					<img className="item_image" src={item.img} alt="" />
					<div className="item_footer">
						<h3>{item.name}</h3>
						<h4>{item.price} $</h4>
						<div className="buttons">
							<button value={item.id} onClick={(e) => handleSell(e)} className="sell">
								Sell
							</button>
							<span>{item.piece}</span>
							<button value={item.id} onClick={(e) => handleBuy(e)} className="buy">
								Buy
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Items;
