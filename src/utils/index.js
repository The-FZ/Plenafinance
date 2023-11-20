/* eslint-disable prettier/prettier */
export const calculateTotal = items => {
	let total = items.reduce((acc, item) => {
		return (acc += item?.quantity * item?.price);
	}, 0);
	return total;
};
