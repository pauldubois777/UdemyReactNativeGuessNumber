import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, ScrollView } from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';
import GuessListItem from '../components/GuessListItem';
import ButtonPrimary from '../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';

const INITIAL_GUESS = 50;

const generateGuessBetween = (newGuessMin, newGuessMax) => {
  const calcMin = Math.ceil(newGuessMin);
  const calcMax = Math.floor(newGuessMax);
  return Math.round((calcMax - calcMin) / 2 + calcMin);
};

const GameScreen = props => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guess, setGuess] = useState(INITIAL_GUESS);
  const [guesses, setGuesses] = useState([INITIAL_GUESS]);

  useEffect(() => {
    if (guess === props.selectedNumber) {
      props.onGameOver(guesses.length);
    }
  }, [guess, guesses.length, props, props.onGameOver, props.selectedNumber]);

  const guessHandler = guessStatus => {
    if (guesses.length > 6) {
      Alert.alert(
        'Did you forget your number?  It was ' + props.selectedNumber
      );
      props.onGameOver(guesses.length);
    }

    let newGuess;
    if (guessStatus === 'higher') {
      setMin(guess);
      newGuess = generateGuessBetween(guess, max);
    } else {
      setMax(guess);
      newGuess = generateGuessBetween(min, guess);
    }

    setGuess(newGuess);
    setGuesses([newGuess, ...guesses]);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.guessCard}>
        <TextStyled style={styles.guessLabelText}>Computer's Guess</TextStyled>
        <NumberOutput number={guess} />
        <View style={styles.buttonsRow}>
          <View style={styles.buttonView}>
            <ButtonPrimary
              onPress={() => guessHandler('lower')}
              color={colors.cancel}>
              <Icon name="minus-circle" size={30} />
            </ButtonPrimary>
          </View>
          <View style={styles.buttonView}>
            <ButtonPrimary
              onPress={() => guessHandler('higher')}
              color={colors.cancel}>
              <Icon name="plus-circle" size={30} />
            </ButtonPrimary>
          </View>
        </View>
      </Card>
      <View style={styles.guessListContainer}>
        <ScrollView contentContainerStyle={styles.guessList}>
          {guesses.map((aGuess, idx) => (
            <GuessListItem
              guessNumber={guesses.length - idx}
              value={aGuess}
              key={idx}
            />
          ))}
        </ScrollView>
      </View>
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
  guessCard: {
    width: 400,
    maxWidth: '90%',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginTop: 20
  },
  guessLabelText: {
    fontSize: 18
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
    // paddingHorizontal: 15,
    // paddingBottom: 15
  },
  buttonView: {
    width: '40%'
  },
  guessListContainer: {
    width: '60%',
    flex: 1
  },
  guessList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default GameScreen;
