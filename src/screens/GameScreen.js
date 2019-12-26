import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import colors from '../constants/colors';

const generateGuessBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const GameScreen = props => {
  const [guess, setGuess] = useState(generateGuessBetween(1, 99));

  const guessHandler = guessStatus => {
    console.log(guessStatus);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <Card style={styles.guessCard}>
          <Text style={styles.guessLabelText}>Computer's Guess</Text>
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
    justifyContent: 'space-evenly',
    width: '100%'
    // paddingHorizontal: 15,
    // paddingBottom: 15
  },
  buttonView: {
    width: '30%'
  }
});

export default GameScreen;
