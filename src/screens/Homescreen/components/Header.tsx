import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Cart from '../../../components/common/Cart';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hey, Rahul</Text>
        <Cart color={'#fff'} />
      </View>
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.title}>Delivery to</Text>
          <Text style={styles.value}>Green way 3000, Sylhet </Text>
        </View>
        <View>
          <Text style={styles.title}>Within</Text>
          <Text style={styles.value}>1 hour</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 252,
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: '#A1ABC0',
  },
  value: {fontSize: 14, fontWeight: '500', color: '#F8F9FB'},
  addressContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
