import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Details = ({details = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  details: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8891A5',
    marginTop: 6,
  },
  header: {fontSize: 16, fontWeight: '600'},
});
