import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverCard}>
        <Text style={styles.titleText}>Game Over</Text>
        <Text style={styles.infoText}>
          It took me {props.numberOfGuesses} trys to guess your number.
        </Text>
        <View>
          <Button
            title="New Game"
            onPress={props.onNewGame}
            color={colors.ok}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  gameOverCard: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: colors.card
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  infoText: {
    textAlign: 'center',
    padding: 5
  }
});

export default GameOverScreen;
