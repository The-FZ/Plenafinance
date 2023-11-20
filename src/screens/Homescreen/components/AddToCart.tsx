import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import useHandleCart from '../hooks/useHandleCart';
import {HOMESCREEN_CONSTANTS} from '../../../utils/constants';

const AddToCart = ({item = {}}) => {
  const {handleDeleteItem, handleAddToCart} = useHandleCart();
  const cartData = useSelector(state => state?.cartData?.cartData);
  let index = cartData.findIndex(i => i.id === item?.id);

  return (
    <TouchableOpacity
      onPress={
        index !== -1
          ? () => handleDeleteItem(item)
          : () => handleAddToCart(item)
      }
      style={styles.addToCart}>
      {index === -1 ? (
        <Icon name={HOMESCREEN_CONSTANTS.ADD} size={12} color="#fff" />
      ) : (
        <AntIcon name={HOMESCREEN_CONSTANTS.DELETE} size={12} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  addToCart: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
