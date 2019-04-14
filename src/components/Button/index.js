import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress, success }) => (
  <TouchableOpacity
    style={[styles.button, success ? styles.buttonSuccess : styles.buttonDefault]}
    onPress={onPress}
  >
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
