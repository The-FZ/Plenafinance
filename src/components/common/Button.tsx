import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Button = ({name = 'add', action = () => {}}) => {
  let icon = <MaterialIcon name={name} size={20} color="#000" />;
  if (name === 'subtract') {
    icon = <Text style={styles.decrease}>-</Text>;
  }
  if (name === 'delete') {
    icon = <AntIcon name="delete" size={15} color="#000" />;
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
