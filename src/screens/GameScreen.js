import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, FlatList, Dimensions } from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';
import GuessListItem from '../components/GuessListItem';
import ButtonPrimary from '../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';
import sizeBreakpoint from '../constants/sizeBreakpoint';

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
  const [availableScreenWidth, setAvailableScreenWidth] = useState(
    Dimensions.get('window').width
  );
  const [availableScreenHeight, setAvailableScreenHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    if (guess === props.selectedNumber) {
      props.onGameOver(guesses.length);
    }
  }, [guess, guesses.length, props, props.onGameOver, props.selectedNumber]);

  useEffect(() => {
    const updateLayout = () => {
      const windowDimensions = Dimensions.get('window');
      setAvailableScreenWidth(windowDimensions.width);
      setAvailableScreenHeight(windowDimensions.height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  }, []);

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

  const flatListData = guesses.map((theGuess, idx) => {
    const guessNumber = (guesses.length - idx).toString();
    return {
      id: guessNumber,
      guessNumber,
      value: theGuess
    };
  });

  const listContainerWidth =
    availableScreenWidth > sizeBreakpoint.small ? '60%' : '100%';

  let buttonWidth = '100%';
  let buttonViewWidth = '40%';
  let cardPadding = 15;

  if (availableScreenHeight <= sizeBreakpoint.small) {
    buttonWidth = 75;
    buttonViewWidth = null;
    cardPadding = 1;
  }

  return (
    <View style={styles.screen}>
      <Card style={{ ...styles.guessCard, padding: cardPadding }}>
        <TextStyled style={styles.guessLabelText}>Computer's Guess</TextStyled>
        {availableScreenHeight > sizeBreakpoint.small && (
          <NumberOutput number={guess} />
        )}
        <View style={styles.buttonsRow}>
          <View style={{ width: buttonViewWidth }}>
            <ButtonPrimary
              width={buttonWidth}
              onPress={() => guessHandler('lower')}
              color={colors.cancel}>
              <Icon name="minus-circle" size={30} />
            </ButtonPrimary>
          </View>
          {availableScreenHeight <= sizeBreakpoint.small && (
            <NumberOutput number={guess} />
          )}
          <View style={{ width: buttonViewWidth }}>
            <ButtonPrimary
              width={buttonWidth}
              onPress={() => guessHandler('higher')}
              color={colors.cancel}>
              <Icon name="plus-circle" size={30} />
            </ButtonPrimary>
          </View>
        </View>
      </Card>
      <View
        style={{
          ...styles.guessListContainer,
          width: listContainerWidth
        }}>
        {/* <ScrollView contentContainerStyle={styles.guessList}>
          {guesses.map((aGuess, idx) => (
            <GuessListItem
              guessNumber={guesses.length - idx}
              value={aGuess}
              key={idx}
            />
          ))}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.guessList}
          data={flatListData}
          renderItem={({ item }) => (
            <GuessListItem guessNumber={item.guessNumber} value={item.value} />
          )}
        />
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
    // paddingHorizontal: 15,
    // paddingBottom: 15
  },
  guessListContainer: {
    flex: 1
  },
  guessList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default GameScreen;
