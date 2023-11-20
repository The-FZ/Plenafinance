import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ItemTitle = ({brand = '', title = ''}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.brand}>{brand}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ItemTitle;

const styles = StyleSheet.create({
  detailsContainer: {marginTop: 20, paddingHorizontal: 25},
  brand: {fontSize: 50, fontWeight: '300'},
  title: {fontSize: 50, fontWeight: '600', marginTop: 5},
});
