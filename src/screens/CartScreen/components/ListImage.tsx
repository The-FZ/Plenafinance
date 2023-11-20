import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ListImage = ({uri = ''}) => {
  return <Image source={{uri: uri}} style={styles.image} />;
};

export default ListImage;

const styles = StyleSheet.create({
  image: {height: 50, width: 50, borderRadius: 8},
});
