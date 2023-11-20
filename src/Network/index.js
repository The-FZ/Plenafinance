/* eslint-disable prettier/prettier */
import axios from 'axios';

const baseUrl = 'https://dummyjson.com/products';
const networkCall = async (url, method) => {
	let data = await axios({
		url, method,
	});
	return data?.data;
};

export const ClientFetch = {
	getAllProducts: () => {
		return networkCall(baseUrl, 'get');
	},

	getProductDetails: (id) => {
		let url = `${baseUrl}/${id}`;
		return networkCall(url, 'get');
	},
};
