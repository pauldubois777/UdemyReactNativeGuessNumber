import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();

  const startGameHandler = number => {
    setSelectedNumber(number);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber) {
    content = <GameScreen selectedNumber={selectedNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
export default App;
