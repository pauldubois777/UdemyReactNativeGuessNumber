import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Common
    backgroundColor: 'white',
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
