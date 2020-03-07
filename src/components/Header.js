import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const Header = props => {
  const headerPlatformStyle =
    Platform.OS === 'ios' ? styles.headerIos : styles.headerAndroid;
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid
        })
      }}>
      <TextStyled
        style={{
          ...styles.headerTitle,
          ...Platform.select({
            ios: styles.headerTitleIos,
            android: styles.headerTitleAndroid
          })
        }}>
        {props.title}
      </TextStyled>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    maxHeight: 90,
    height: Dimensions.get('window').height > 600 ? 90 : 50,
    // paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIos: {
    backgroundColor: colors.lightBackground,
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  headerTitleIos: {
    color: colors.primary
  },
  headerTitleAndroid: {
    color: colors.lightText
  }
});

export default Header;
