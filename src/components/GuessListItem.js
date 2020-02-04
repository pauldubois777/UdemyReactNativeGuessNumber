import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextStyled from './TextStyled';
import colors from '../constants/colors';

const GuessListItem = props => {
  return (
    <View style={styles.listItem}>
      <TextStyled>#{props.guessNumber}</TextStyled>
      <TextStyled>{props.value}</TextStyled>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 24,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.listItemBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  }
});

export default GuessListItem;
