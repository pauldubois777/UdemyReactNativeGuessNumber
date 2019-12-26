import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <GameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
export default App;
