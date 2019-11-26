import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import Input from '../components/Input';
import colors from '../constants/colors';

const generateGuessBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const GameScreen = props => {
  const [guess, setGuess] = useState(generateGuessBetween(1, 99));
};

const styles = StyleSheet.create({});

export default GameScreen;
