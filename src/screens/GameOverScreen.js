import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    textAlign: 'center'
  }
});

export default GameOverScreen;
