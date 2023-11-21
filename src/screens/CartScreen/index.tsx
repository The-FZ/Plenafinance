import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BackButton from '../../components/common/BackButton';
import {useSelector} from 'react-redux';
import ListItem from './components/ListItem';
import CheckoutSection from './components/CheckoutSection';

const CartScreen = ({route}) => {
  const cartData = useSelector(state => state?.cartData?.cartData);
  const buyNowData = useSelector(state => state?.cartData?.buyNowData);
  const {buy_now = false} = route.params;

  const renderItem = ({item}) => {
    return <ListItem item={item} buyNow={buy_now} />;
  };

  const renderItemSeperator = () => {
    return <View style={styles.itemSeperator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>
          Shopping Cart (
          {buy_now ? ` ${buyNowData.length}` : `${cartData.length}`} )
        </Text>
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={buy_now ? buyNowData : cartData}
        keyExtractor={item => item?.id + ''}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeperator}
      />
      <CheckoutSection buyNow={buy_now} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 0,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
    marginLeft: 22,
  },
  list: {marginTop: 30, paddingBottom: 80},
  headerContainer: {marginTop: 25, flexDirection: 'row', paddingBottom: 10},
  itemSeperator: {height: 1, backgroundColor: '#EBEBFB'},
});
