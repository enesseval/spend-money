import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Bar() {
	const money = useSelector((state) => state.money.totalMoney);
	return (
		<div className="bar">
			<p>Remaining: {money}$ </p>
			<p> You haven't spent a single dollar! start buying!</p>
		</div>
	);
}

export default Bar;
