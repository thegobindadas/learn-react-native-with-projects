import React, { useState, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Animated,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {

  const animation = useRef(new Animated.Value(1)).current;
  
  // Trigger scale animation when the dice rolls
   const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };


  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <Image source={imageUrl} style={styles.diceImage} />
    </Animated.View>
  )
}


function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = React.useState<ImageSourcePropType>(DiceOne);


  const rolltheDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger("impactMedium", options);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: '#7D91E0' },
          ]}
          onPress={rolltheDiceOnTap}
        >
          <Text style={styles.buttonText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  diceContainer: {
    alignItems: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#8EA7E9',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 4,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});



export default App;