import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const Header = props => {
  // TODO: This can all be refactored into a startup routine to set static styles based on platform.
  //       IE: It would be a theming based on platform, and we wouldn't then need to to any platform checks
  //       like this in individual components.
  let headerPlatformStyle;
  let headerTitlePlatformStyle;
  if (Platform.OS === 'ios') {
    headerPlatformStyle = styles.headerIos;
    headerTitlePlatformStyle = styles.headerTitleIos;
  } else {
    headerPlatformStyle = styles.headerAndroid;
    headerTitlePlatformStyle = styles.headerTitleAndroid;
  }

  return (
    <View
      style={{
        ...styles.header,
        ...headerPlatformStyle
      }}>
      <TextStyled
        style={{
          ...styles.headerTitle,
          ...headerTitlePlatformStyle
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
