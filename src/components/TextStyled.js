import React from 'react';
import { StyleSheet, Text } from 'react-native';
import fonts from '../constants/fonts';

const TextStyled = props => {
  return <Text {...props} style={{ ...styles.text, ...props.style }} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
    fontSize: 16
  }
});

export default TextStyled;
