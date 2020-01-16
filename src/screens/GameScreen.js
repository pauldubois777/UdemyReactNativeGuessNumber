import React, { useState, useEffect } from 'react';
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';
import ButtonPrimary from '../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';

const GameScreen = props => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guess, setGuess] = useState(50);
  const [guesses, setGuesses] = useState([50]);

  useEffect(() => {
    if (guess === props.selectedNumber) {
      props.onGameOver(guesses.length);
    }
  }, [guess, guesses.length, props, props.onGameOver, props.selectedNumber]);

  const generateGuessBetween = (newGuessMin, newGuessMax) => {
    const calcMin = Math.ceil(newGuessMin);
    const calcMax = Math.floor(newGuessMax);
    const currentGuess = Math.round((calcMax - calcMin) / 2 + calcMin);

    setGuess(currentGuess);
    setGuesses(guesses.concat([currentGuess]));
  };

  const guessHandler = guessStatus => {
    if (guesses.length > 6) {
      Alert.alert(
        'Did you forget your number?  It was ' + props.selectedNumber
      );
      props.onGameOver(guesses.length);
    }

    if (guessStatus === 'higher') {
      setMin(guess);
      generateGuessBetween(guess, max);
    } else {
      setMax(guess);
      generateGuessBetween(min, guess);
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <Card style={styles.guessCard}>
          <TextStyled style={styles.guessLabelText}>
            Computer's Guess
          </TextStyled>
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
        {guesses.map(aGuess => (
          <TextStyled key={aGuess}>{aGuess}</TextStyled>
        ))}
      </View>
    </TouchableWithoutFeedback>
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
  }
});

export default GameScreen;
