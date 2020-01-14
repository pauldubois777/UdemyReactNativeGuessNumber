import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/colors';
import TextStyled from './TextStyled';

const ButtonPrimary = props => {
  const buttonViewStyles = { ...styles.buttonView };
  if (props.color) {
    buttonViewStyles.backgroundColor = props.color;
  }

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
      <View style={buttonViewStyles}>
        <TextStyled style={styles.buttonText}>{props.title}</TextStyled>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  buttonText: {
    color: Colors.lightText,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default ButtonPrimary;
