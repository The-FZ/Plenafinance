import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Price = ({price = 0, discountPercentage = 0}) => {
  return (
    <View style={styles.priceDiscountContainer}>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.discount}>{discountPercentage}% OFF</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  discount: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    marginLeft: 20,
  },
  price: {color: '#2A4BA0', fontSize: 20, fontWeight: '700'},
  priceDiscountContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});
