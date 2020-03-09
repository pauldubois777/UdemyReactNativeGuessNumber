// This file and ButtonPrimary.ios were created as examples for platform specific components.
// In real-world, probably not needed since these are not very platform specific, and could be
// done with simple logic in the shared component we started with

import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import TextStyled from './TextStyled';
import commonStyles from '../constants/commonStyles';

const ButtonPrimary = props => {
  const ButtonNative =
    Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

  const buttonViewStyles = { ...styles.buttonView };
  if (props.color) {
    buttonViewStyles.backgroundColor = props.color;
  }
  if (props.width) {
    buttonViewStyles.width = props.width;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonNative activeOpacity={0.6} onPress={props.onPress}>
        <View style={buttonViewStyles}>
          <TextStyled style={styles.buttonText}>{props.children}</TextStyled>
        </View>
      </ButtonNative>
    </View>
  );
};

const styles = StyleSheet.create({
  // Using this style to clip the Android ripple that goes beyond the borderRadius of buttonView
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  buttonView: commonStyles.buttonPrimary.buttonView,
  buttonText: commonStyles.buttonPrimary.buttonText
});

export default ButtonPrimary;
