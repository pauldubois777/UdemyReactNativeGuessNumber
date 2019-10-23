import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputCard}>
        <Text>Select a Number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonsRow}>
          <View style={styles.buttonView}>
            <Button title="Reset" onPress={() => {}} color={colors.cancel} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={() => {}} color={colors.ok} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCard: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: colors.card
  },
  input: {
    width: 45,
    textAlign: 'center'
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
    // paddingHorizontal: 15,
    // paddingBottom: 15
  },
  buttonView: {
    width: '40%'
  }
});

export default StartGameScreen;
