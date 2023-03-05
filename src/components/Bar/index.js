import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Bar() {
	const money = useSelector((state) => state.money.totalMoney);
	const firstMoney = useSelector((state) => state.money.firstMoney);
	return (
		<div className="bar">
			<p>Remaining: {money}$ </p>
			<p>{money === firstMoney ? "You haven't spent a single dollar! start buying!" : `You only spent ${(1 - money / firstMoney).toFixed(6)}% of the total!`}</p>
		</div>
	);
}

export default Bar;
