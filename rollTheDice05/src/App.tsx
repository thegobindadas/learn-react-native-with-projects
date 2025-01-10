import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
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
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
        <Pressable 
        style={styles.button}
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
  imageContainer: {
    marginVertical: 20,
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