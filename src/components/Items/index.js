import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementPiece, incrementPiece, selectReceipts } from "../../redux/moneySlice";
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
		dispatch(selectReceipts());
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
		dispatch(selectReceipts());
	};

	const cal = (price) => {
		if (price < 999) {
			return price;
		} else if (price > 999 && price < 9999) {
			const p = String(price);
			const cal = p[0] + "," + p[1] + p[2] + p[3];
			return cal;
		} else if (price > 9999 && price < 99999) {
			const p = String(price);
			const cal = p[0] + p[1] + "," + p[2] + p[3] + p[4];
			return cal;
		} else if (price > 99999 && price < 999999) {
			const p = String(price);
			const cal = p[0] + p[1] + p[2] + "," + p[3] + p[4] + p[5];
			return cal;
		} else if (price > 999999 && price < 9999999) {
			const p = String(price);
			const cal = p[0] + "," + p[1] + p[2] + p[3] + "," + p[4] + p[5] + p[6];
			return cal;
		} else if (price > 9999999 && price < 99999999) {
			const p = String(price);
			const cal = p[0] + p[1] + "," + p[2] + p[3] + p[4] + "," + p[5] + p[6] + p[7];
			return cal;
		} else if (price > 99999999 && price < 999999999) {
			const p = String(price);
			const cal = p[0] + p[1] + p[2] + "," + p[3] + p[4] + p[5] + "," + p[6] + p[7] + p[8];
			return cal;
		} else if (price > 999999999 && price < 9999999999) {
			const p = String(price);
			const cal = p[0] + "," + p[1] + p[2] + p[3] + "," + p[4] + p[5] + p[6] + "," + p[7] + p[8] + p[9];
			return cal;
		}
	};

	return (
		<div className="items">
			{items.map((item, index) => (
				<div key={index} className="item_card">
					<img className="item_image" src={item.img} alt="" />
					<div className="item_footer">
						<h3>{item.name}</h3>
						<h4>{cal(item.price)} $</h4>
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
