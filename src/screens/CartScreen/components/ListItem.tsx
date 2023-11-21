import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import ListImage from './ListImage';
import Button from '../../../components/common/Button';
import useHandleCart from '../../Homescreen/hooks/useHandleCart';

const ListItem = ({item = {}, buyNow = false}) => {
  const {
    increase,
    decrease,
    deleteProduct,
    bumpBuyNowData,
    decreaseBuyNow,
    deleteBuyNow,
  } = useHandleCart();
  const value = useRef(new Animated.Value(0)).current;
  const deleteItem = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      buyNow ? deleteBuyNow() : deleteProduct(item?.id);
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: value.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <View style={[styles.flexRow, styles.flex1]}>
        <ListImage uri={item?.thumbnail} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.price}>${item?.price}</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        {item?.quantity === 1 ? (
          <Button
            name="delete"
            action={() => {
              deleteItem();
            }}
          />
        ) : (
          <Button
            name="subtract"
            action={() => (buyNow ? decreaseBuyNow() : decrease(item?.id))}
          />
        )}
        <Text style={styles.quantity}>{item?.quantity}</Text>
        <Button
          name="add"
          action={() => (buyNow ? bumpBuyNowData() : increase(item?.id))}
        />
      </View>
    </Animated.View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  flexRow: {flexDirection: 'row'},
  flex1: {flex: 1},
  detailsContainer: {marginLeft: 20, justifyContent: 'center', flex: 1},
  title: {fontSize: 14, fontWeight: '500', flexShrink: 1},
  price: {fontSize: 14, fontWeight: '400', marginTop: 4},
});
