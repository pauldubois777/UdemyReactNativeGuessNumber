import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

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
    maxHeight: 90,
    height: Dimensions.get('window').height > 600 ? 90 : 50,
    // paddingTop: 36,
    backgroundColor:
      Platform.OS === 'android' ? colors.primary : colors.lightBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:
      Platform.OS === 'android' ? 'transparent' : colors.border,
    borderBottomWidth: Platform.OS === 'android' ? 0 : 1
  },
  headerTitle: {
    color: Platform.OS === 'android' ? colors.lightText : colors.primary,
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default Header;
