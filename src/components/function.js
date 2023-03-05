export const cal = (price) => {
	if (price < 999) {
		return price;
	} else if (price > 999 && price < 9999) {
		const p = String(price);
		const cal = p[0] + "." + p[1] + "k";
		return cal;
	} else if (price > 9999 && price < 99999) {
		const p = String(price);
		const cal = p[0] + p[1] + "k";
		return cal;
	} else if (price > 99999 && price < 999999) {
		const p = String(price);
		const cal = p[0] + p[1] + p[2] + "k";
		return cal;
	} else if (price > 999999 && price < 9999999) {
		const p = String(price);
		const cal = p[0] + "." + p[1] + "m";
		return cal;
	} else if (price > 9999999 && price < 99999999) {
		const p = String(price);
		const cal = p[0] + p[1] + "m";
		return cal;
	} else if (price > 99999999 && price < 999999999) {
		const p = String(price);
		const cal = p[0] + p[1] + p[2] + "m";
		return cal;
	} else if (price > 999999999 && price < 9999999999) {
		const p = String(price);
		const cal = p[0] + "." + p[1] + "b";
		return cal;
	} else if (price > 9999999999 && price < 99999999999) {
		const p = String(price);
		const cal = p[0] + p[1] + "b";
		return cal;
	} else if (price > 99999999999 && price < 999999999999) {
		const p = String(price);
		const cal = p[0] + p[1] + p[2] + "b";
		return cal;
	}
};

export const calculate = (price) => {
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
	} else if (price > 9999999999 && price < 99999999999) {
		const p = String(price);
		const cal = p[0] + p[1] + "," + p[2] + p[3] + p[4] + "," + p[5] + p[6] + p[7] + "," + p[8] + p[9] + p[10];
		return cal;
	}
};
