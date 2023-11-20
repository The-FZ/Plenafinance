import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {calculateTotal} from '../../../utils';
import CheckoutButton from './CheckoutButton';

const CheckoutSection = () => {
  const cartData = useSelector(state => state?.cartData?.cartData);
  const Subtotal = calculateTotal(cartData);
  const delivery = 2;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.leftText}>Subtotal</Text>
        <Text style={styles.rightText}>$ {Subtotal} </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.leftText}>Delivery</Text>
        <Text style={styles.rightText}>$ {delivery.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.leftText}>Total</Text>
        <Text style={styles.rightText}>$ {Subtotal + delivery}</Text>
      </View>
      <CheckoutButton isCartEmpty={!cartData.length} />
    </View>
  );
};

export default CheckoutSection;

const styles = StyleSheet.create({
  container: {
    height: 250,
    padding: 36,
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  leftText: {color: '#616A7D', fontSize: 16, fontWeight: '400'},
  rightText: {fontSize: 16, fontWeight: '400'},
});
