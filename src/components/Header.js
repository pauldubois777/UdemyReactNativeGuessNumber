import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

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
