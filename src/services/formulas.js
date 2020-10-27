export const addFormula = (list = []) => {
	if (list.length == 0) {
		return null;
	}

	let result = 0;
	list.map((item) => {
		if (item.value) {
			result += item.value * item.dim;
		}
	});

	if (result > 0) {
		return exponentialNotation(result.toPrecision(3));
		// return result.toPrecision(3);
	}
	else {
		return 0;
	}
};

export const divideFormula = (list = []) => {
	if (list.length == 0) {
		return null;
	}

	let down = 0;
	list.map((item) => {
		if (item.value && item.value > 0) {
			let down2 = 1 / (item.value * item.dim);
			down += down2;
		}
	});

	if (down > 0) {
		return exponentialNotation((1 / down).toPrecision(3));
		// return (1 / down).toPrecision(3);
	}
	else {
		return 0;
	}
};

export const exponentialNotation = (value) => {
	console.log('res', value);
	if (!value) return value;

	const numberxD = value.toString();

	if (numberxD.includes('e')) {
		const valuesArr = numberxD.split(/\e+/);

		const result = `${valuesArr[0]}x10^${valuesArr[1]}`;

		return result;
	}
	else {
		return value;
	}
};
