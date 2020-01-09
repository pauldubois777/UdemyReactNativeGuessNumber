import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const generateGuessBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.round((max - min) / 2 + min);
};

const GameScreen = props => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guess, setGuess] = useState(generateGuessBetween(min, max));
  const [guessNumber, setGuessNumber] = useState(1);

  const guessHandler = guessStatus => {
    if (guessNumber > 6) {
      Alert.alert(
        'Did you forget your number?  It was ' + props.selectedNumber
      );
      props.onGameOver(guessNumber);
    }

    setGuessNumber(guessNumber + 1);

    if (guessStatus === 'higher') {
      setMin(guess);
      setGuess(generateGuessBetween(guess, max));
    } else {
      setMax(guess);
      setGuess(generateGuessBetween(min, guess));
    }
  };

  useEffect(() => {
    if (guess === props.selectedNumber) {
      props.onGameOver(guessNumber);
    }
  }, [guess, guessNumber, props, props.onGameOver, props.selectedNumber]);

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
              <Button
                title="Lower"
                onPress={() => guessHandler('lower')}
                color={colors.cancel}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Higher"
                onPress={() => guessHandler('higher')}
                color={colors.cancel}
              />
            </View>
          </View>
        </Card>
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
    width: 300,
    maxWidth: '80%',
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
    width: '30%'
  }
});

export default GameScreen;
