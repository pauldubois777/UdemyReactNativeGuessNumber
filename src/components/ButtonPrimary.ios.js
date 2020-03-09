// This file and ButtonPrimary.android were created as examples for platform specific components.
// In real-world, probably not needed since these are not very platform specific, and could be
// done with simple logic in the shared component we started with

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextStyled from './TextStyled';
import commonStyles from '../constants/commonStyles';

const ButtonPrimary = props => {
  const buttonViewStyles = { ...styles.buttonView };
  if (props.color) {
    buttonViewStyles.backgroundColor = props.color;
  }
  if (props.width) {
    buttonViewStyles.width = props.width;
  }

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={buttonViewStyles}>
        <TextStyled style={styles.buttonText}>{props.children}</TextStyled>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: commonStyles.buttonPrimary.buttonView,
  buttonText: commonStyles.buttonPrimary.buttonText
});

export default ButtonPrimary;
