import {View, StyleSheet} from 'react-native';
import React from 'react';

const Paginator = ({data = [], currentIndex = 0}) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return (
          <View style={styles.dot(index, currentIndex)} key={index + ''} />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    bottom: 15,
    zIndex: 1,
    flexDirection: 'row',
  },
  dot: (index = 0, currentIndex = 0) => ({
    height: 5,
    width: 20,
    backgroundColor: index === currentIndex ? '#F9B023' : '#E4E4E4',
    borderRadius: 10,
    marginRight: 5,
  }),
});
