import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ListImage from './ListImage';
import Button from '../../../components/common/Button';
import useHandleCart from '../../Homescreen/hooks/useHandleCart';

const ListItem = ({item = {}}) => {
  const {increase, decrease, deleteProduct} = useHandleCart();

  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.flex1]}>
        <ListImage uri={item?.thumbnail} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.price}>${item?.price}</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        {item?.quantity === 1 ? (
          <Button name="delete" action={() => deleteProduct(item?.id)} />
        ) : (
          <Button name="subtract" action={() => decrease(item?.id)} />
        )}
        <Text style={styles.quantity}>{item?.quantity}</Text>
        <Button name="add" action={() => increase(item?.id)} />
      </View>
    </View>
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
