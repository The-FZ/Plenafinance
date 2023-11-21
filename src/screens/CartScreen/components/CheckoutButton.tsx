import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CheckoutButton = ({isCartEmpty = true}) => {
  return (
    <TouchableOpacity
      disabled={isCartEmpty}
      style={styles.container(isCartEmpty)}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>Proceed to Checkout</Text>
    </TouchableOpacity>
  );
};

export default CheckoutButton;

const styles = StyleSheet.create({
  container: (isCartEmpty = false) => ({
    padding: 20,
    backgroundColor: '#2A4BA0',
    borderRadius: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isCartEmpty ? 0.5 : 1,
  }),
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});
