import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CheckoutButton = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Proceed to Checkout</Text>
    </TouchableOpacity>
  );
};

export default CheckoutButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2A4BA0',
    borderRadius: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});
