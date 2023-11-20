import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Cart = ({color = '#000'}) => {
  const navigation = useNavigation();
  const CartData = useSelector(state => state?.cartData?.cartData);

  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <TouchableOpacity onPress={navigateToCart}>
      {CartData.length > 0 ? (
        <View style={styles.cartValue}>
          <Text style={styles.cartCount}>{CartData.length}</Text>
        </View>
      ) : null}
      <Icon name="shopping" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartValue: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#F9B023',
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -13,
    top: -13,
    zIndex: 1,
  },
  cartCount: {fontSize: 14, fontWeight: '600', color: '#fff'},
});
