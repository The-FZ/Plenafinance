/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from '../screens/Homescreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="HomeScreen"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="CartScreen" component={CartScreen} />
				<Stack.Screen name="DetailsScreen" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigator;
