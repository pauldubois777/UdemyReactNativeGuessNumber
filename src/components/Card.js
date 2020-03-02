import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Common
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
    backgroundColor: colors.card,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,

    // IOS
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    // Android
    elevation: 3
  }
});

export default Card;
