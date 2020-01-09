import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const NumberOutput = props => {
  return (
    <View style={styles.view}>
      <TextStyled style={styles.number}>{props.number}</TextStyled>
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
