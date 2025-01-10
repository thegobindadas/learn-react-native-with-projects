import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  const [backgroundColor, setBackgroundColor] = useState("#000000");


  // Function to generate random hex color
  const generateColor = () => {

    const hexRange = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexRange[Math.floor(Math.random() * 16)];
    }

    setBackgroundColor(hexColor);
  };


  return (
    <>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      <View
        style={[styles.container, { backgroundColor: backgroundColor }]}
      >
        <TouchableOpacity
          onPress={generateColor}
          style={styles.actionBtn}
          activeOpacity={0.5}
        >
          <Text style={styles.actionBtnTxt}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    backgroundColor: "#6A1B4D",
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  actionBtnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});



export default App;