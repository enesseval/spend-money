import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementPiece, incrementPiece } from "../../redux/moneySlice";
import "./style.css";

function Items() {
	const items = useSelector((state) => state.money.items);
	const totalMoney = useSelector((state) => state.money.totalMoney);
	const dispatch = useDispatch();

	const handleSell = (index) => {
		const value = document.getElementById(`piece${index}`).innerHTML;
		document.getElementById(`piece${index}`).innerHTML = parseInt(value) - 1;
		dispatch(
			decrementPiece({
				value: parseInt(value) - 1,
				index: index,
			}),
		);
	};

	const handleBuy = (index) => {
		const value = document.getElementById(`piece${index}`).innerHTML;
		document.getElementById(`piece${index}`).innerHTML = parseInt(value) + 1;
		dispatch(
			incrementPiece({
				value: parseInt(value) + 1,
				index: index,
			}),
		);
	};

	return (
		<div className="items">
			{items.map((item, index) => (
				<div key={index} className="item_card">
					<img className="item_image" src={item.img} alt="" />
					<div className="item_footer">
						<h3>{item.name}</h3>
						<h4>{item.price} $</h4>
						<div className="buttons">
							<button onClick={() => handleSell(index)} className="sell" disabled={item.piece === 0 ? true : false}>
								Sell
							</button>
							<span id={`piece${index}`}>{item.piece}</span>
							<button onClick={() => handleBuy(index)} className="buy" disabled={totalMoney < item.price ? true : false}>
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
