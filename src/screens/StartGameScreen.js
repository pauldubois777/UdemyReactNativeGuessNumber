import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = props => {
  const [value, setValue] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();

  const valueChangeHandler = inputValue => {
    const cleanInput = inputValue.replace(/[^0-9]/g, '');
    setValue(cleanInput);
  };

  const resetHandler = () => {
    setValue();
    setConfirmed(false);
  };

  const startHanlder = () => {
    props.onStartGame(confirmedNumber);
  };

  const confirmHandler = () => {
    const intValue = parseInt(value, 10);
    if (isNaN(intValue) || intValue <= 0 || intValue > 99) {
      Alert.alert('Invalid Number', 'Entry must be from 1 to 99', [
        { text: 'OK', style: 'destructive', onPress: resetHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setConfirmedNumber(intValue);
    setValue();
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputCard}>
          <Text>Select a Number from 1 to 99</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            onChangeText={valueChangeHandler}
            value={value}
          />
          <View style={styles.buttonsRow}>
            <View style={styles.buttonView}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={colors.cancel}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                color={colors.ok}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.confirmStartCard}>
            <Text style={styles.confirmedText}>You selected</Text>
            <NumberOutput number={confirmedNumber} />
            <View>
              <Button
                title="Start Game"
                onPress={startHanlder}
                color={colors.ok}
              />
            </View>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputCard: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: colors.card
  },
  confirmStartCard: {
    width: 150,
    maxWidth: '60%',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginTop: 20
  },
  input: {
    width: 45,
    fontSize: 16,
    textAlign: 'center'
  },
  confirmedText: {
    fontSize: 18
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
