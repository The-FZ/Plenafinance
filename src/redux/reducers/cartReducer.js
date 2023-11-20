/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const cartReducer = createSlice({
	name: 'cart',
	initialState: {
		cartData: [],
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
	},
});

export const { storeCartData, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartReducer.actions;

export default cartReducer.reducer;
