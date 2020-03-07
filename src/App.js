import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const startGameHandler = number => {
    setSelectedNumber(number);
  };

  const gameOverHandler = guessNumber => {
    setNumberOfGuesses(guessNumber);
    setGameOver(true);
  };

  const newGameHandler = () => {
    setSelectedNumber();
    setNumberOfGuesses(0);
    setGameOver(false);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber) {
    if (gameOver) {
      content = (
        <GameOverScreen
          numberOfGuesses={numberOfGuesses}
          onNewGame={newGameHandler}
        />
      );
    } else {
      content = (
        <GameScreen
          selectedNumber={selectedNumber}
          onGameOver={gameOverHandler}
        />
      );
    }
  }

  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number" />
      <View style={styles.screenView}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1
  }
});

export default App;
