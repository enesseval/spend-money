import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReceipts } from "../../redux/moneySlice";
import "./style.css";
import { cal, calculate } from "../function";

function Total() {
	const total = useSelector((state) => state.money.totalMoney);
	const first = useSelector((state) => state.money.firstMoney);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(selectReceipts());
	}, [dispatch]);

	const items = useSelector((state) => state.money.receipts);
	let totalReceipt = 0;

	const calc = (price) => {
		totalReceipt += price;
		return cal(price);
	};
	const calcul = (price) => {
		return calculate(price);
	};
	if (total !== first) {
		return (
			<div className="total">
				<h1>Your Receipt</h1>
				{items.map((item, index) => (
					<div key={index} className="totalItem">
						<p>{item.name}</p>
						<p>{item.piece}</p>
						<p>${calc(item.price * item.piece)}</p>
					</div>
				))}
				<div className="totalItemReceipt">
					<p>TOTAL</p>
					<p>${calcul(totalReceipt)}</p>
				</div>
			</div>
		);
	}
}

export default Total;
