import {View, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../../../components/common/BackButton';
import Cart from '../../../components/common/Cart';

const Header = () => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Cart color="#2A4BA0" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingHorizontal: 20,
  },
});
