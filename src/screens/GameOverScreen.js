import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverCard}>
        <TextStyled style={styles.titleText}>Game Over</TextStyled>
        <TextStyled style={styles.infoText}>
          It took me {props.numberOfGuesses} trys to guess your number.
        </TextStyled>
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
