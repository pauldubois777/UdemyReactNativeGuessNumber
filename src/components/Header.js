import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const Header = props => {
  return (
    <View style={styles.header}>
      <TextStyled style={styles.headerTitle}>{props.title}</TextStyled>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    // paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default Header;
