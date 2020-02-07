import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import TextInputStyled from '../components/TextInputStyled';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';
import ButtonPrimary from '../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';
import fonts from '../constants/fonts';

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
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Icon
              name="rocket"
              size={Dimensions.get('window').height > 600 ? 50 : 30}
              color={colors.ok}
            />
            <TextStyled style={styles.title}>Start a New Game!</TextStyled>
            <Card style={styles.selectCard}>
              <TextStyled>Select a Number from 1 to 99</TextStyled>
              <TextInputStyled
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
                  <ButtonPrimary onPress={resetHandler} color={colors.cancel}>
                    Reset
                  </ButtonPrimary>
                </View>
                <View style={styles.buttonView}>
                  <ButtonPrimary onPress={confirmHandler} color={colors.ok}>
                    Confirm
                  </ButtonPrimary>
                </View>
              </View>
            </Card>
            {confirmed && (
              <Card style={styles.confirmStartCard}>
                <TextStyled style={styles.confirmedText}>
                  You selected
                </TextStyled>
                <NumberOutput number={confirmedNumber} />
                <View>
                  <ButtonPrimary onPress={startHanlder}>
                    Start Game
                  </ButtonPrimary>
                </View>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectCard: {
    width: '80%',
    maxWidth: 400
  },
  confirmStartCard: {
    width: '60%',
    maxWidth: 300
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
    fontSize: 20,
    fontFamily: fonts.regular,
    fontWeight: 'bold' // Can use bold weight rather than OpenSans-Bold
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:
      Dimensions.get('window').width < 351
        ? '90%'
        : Dimensions.get('window').width < 800
        ? '80%'
        : '70%'
    // paddingHorizontal: 15,
    // paddingBottom: 15
  },
  buttonView: {
    width: '45%'
  }
});

export default StartGameScreen;
