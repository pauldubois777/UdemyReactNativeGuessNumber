import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import fonts from '../constants/fonts';

const TextInputStyled = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlignVertical: 'bottom',
    fontFamily: fonts.regular
  }
});

export default TextInputStyled;
