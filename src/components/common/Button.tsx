import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Button = ({name = 'add', action = () => {}}) => {
  let icon;
  if (name === 'subtract') {
    icon = <Text style={styles.decrease}>-</Text>;
  } else if (name === 'delete') {
    icon = <AntIcon name={name} size={15} color="#000" />;
  } else {
    icon = <MaterialIcon name={name} size={20} color="#000" />;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrease: {fontSize: 22, fontWeight: '900'},
});
