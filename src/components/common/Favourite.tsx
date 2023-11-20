import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Favourite = ({isFavourite = false, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      {!isFavourite ? (
        <AntIcon name="hearto" size={25} color="#000" />
      ) : (
        <AntIcon name="heart" size={25} color="#FF8181" />
      )}
    </TouchableOpacity>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
