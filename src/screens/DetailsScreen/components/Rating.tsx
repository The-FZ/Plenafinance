import {StyleSheet} from 'react-native';
import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

const Rating = ({rating = 0}) => {
  return (
    <AirbnbRating
      count={5}
      defaultRating={rating}
      isDisabled
      size={18}
      ratingContainerStyle={styles.ratingContainer}
    />
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    alignSelf: 'flex-start',
    height: 5,
    paddingHorizontal: 25,
  },
});
