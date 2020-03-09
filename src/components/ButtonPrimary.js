import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import Colors from '../constants/colors';
import TextStyled from './TextStyled';

const ButtonPrimary = props => {
  let ButtonNative = TouchableOpacity; // ios or older Android
  if (Platform.OS === 'andrdoid' && Platform.Version >= 21) {
    ButtonNative = TouchableNativeFeedback;
  }

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

const borderRadius = 10;
const styles = StyleSheet.create({
  // Using this style to clip the Android ripple that goes beyond the borderRadius of buttonView
  buttonContainer: {
    borderRadius,
    overflow: 'hidden'
  },
  buttonView: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius
  },
  buttonText: {
    color: Colors.lightText,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default ButtonPrimary;
