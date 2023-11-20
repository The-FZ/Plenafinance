import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonLG = ({type = 'primary', text = '', onPress = () => {}}) => {
  let color = '#2A4BA0';
  let backgroundColor = '#fff';

  if (type === 'secondary') {
    color = '#fff';
    backgroundColor = '#2A4BA0';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container(color, backgroundColor)}>
      <Text style={styles.buttonText(color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLG;

const styles = StyleSheet.create({
  container: (color: '', backgroundColor: '') => ({
    backgroundColor,
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 20,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color,
  }),

  buttonText: (color = '') => ({color, fontWeight: '600', fontSize: 16}),
});
