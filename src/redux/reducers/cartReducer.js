/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const cartReducer = createSlice({
	name: 'cart',
	initialState: {
		cartData: [],
		buyNowData: [],
	},
	reducers: {
		storeCartData: (state, actions) => {
			let index = state.cartData.findIndex(item => item.id === actions.payload.id);
			if (index === -1) {
				state.cartData = [
					...state.cartData,
					actions.payload,
				];
			}
		},
		removeItemFromCart: (state, actions) => {
			let allData = state.cartData.filter(item => item.id !== actions.payload);
			state.cartData = allData;
		},
		increaseQuantity: (state, actions) => {
			let index = state.cartData.findIndex(item => item.id === actions.payload);
			state.cartData[index].quantity = state.cartData[index].quantity + 1;
		},
		decreaseQuantity: (state, actions) => {
			let index = state.cartData.findIndex(item => item.id === actions.payload);
			state.cartData[index].quantity = state.cartData[index].quantity - 1;
		},
		addToBuyNow: (state, actions) => {
			state.buyNowData = [actions.payload];
		},
		increaseBuyNowQuantity: (state) => {
			state.buyNowData[0].quantity = state.buyNowData[0].quantity + 1;
		},
		decreaseBuyNowQuantity: (state) => {
			state.buyNowData[0].quantity = state.buyNowData[0].quantity - 1;
		},
		deleteBuyNowData: (state) => {
			state.buyNowData = [];
		}
	},
});

export const { storeCartData, removeItemFromCart, increaseQuantity, decreaseQuantity, addToBuyNow, increaseBuyNowQuantity, decreaseBuyNowQuantity, deleteBuyNowData } = cartReducer.actions;

export default cartReducer.reducer;
