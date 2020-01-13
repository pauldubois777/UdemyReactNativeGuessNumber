import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';
import TextStyled from '../components/TextStyled';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverCard}>
        <TextStyled style={styles.titleText}>Game Over</TextStyled>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/success.png')}
            resizeMode="cover"
          />
          {/* <Image
            style={styles.image}
            source={{
              uri:
                'https://media.gettyimages.com/photos/bold-picture-id483390353?s=612x612'
            }}
            resizeMode="cover"
          /> */}
        </View>
        <TextStyled style={styles.infoText}>
          It took me{' '}
          <TextStyled style={styles.highlight}>
            {props.numberOfGuesses}
          </TextStyled>{' '}
          trys to guess your number.
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
    margin: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10
  },
  highlight: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  }
});

export default GameOverScreen;
