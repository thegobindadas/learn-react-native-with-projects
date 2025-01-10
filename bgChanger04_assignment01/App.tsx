import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



// Random color generator function
const getRandomColor = () => {

  const hexRange = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  
  return color;
};


function App(): React.JSX.Element {

  const [backgroundColor, setBackgroundColor] = useState('#FF6347');
  const [shapesColors, setShapesColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);


  // Function to change colors
  const changeColors = () => {
    setBackgroundColor(getRandomColor());
    setShapesColors([
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
    ]);
  };


  return (
    <>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      <View style={[styles.container, { backgroundColor }]}>
        {/* Circle */}
        <View style={[styles.shape, styles.circle, { backgroundColor: shapesColors[0] }]} />
        {/* Square */}
        <View style={[styles.shape, styles.square, { backgroundColor: shapesColors[1] }]} />
        {/* Triangle */}
        <View style={[styles.shape, styles.triangle, { borderBottomColor: shapesColors[2] }]} />

        {/* Change Color Button */}
        <TouchableOpacity style={styles.actionBtn} onPress={changeColors} activeOpacity={0.8}>
          <Text style={styles.actionBtnTxt}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape: {
    marginVertical: 20, // Equal vertical spacing between shapes
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  square: {
    width: 120,
    height: 120,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  actionBtn: {
    marginTop: 30,
    backgroundColor: '#6A1B4D',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  actionBtnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});



export default App;