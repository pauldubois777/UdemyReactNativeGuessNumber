import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const NumberOutput = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue'
  }
});

export default NumberOutput;
