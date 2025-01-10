import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  
  const [backgroundColor, setBackgroundColor] = useState("red");


  const generateColor = () => {

    const hexRange = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexRange[Math.floor(Math.random() * 16)];
    }

    setBackgroundColor(hexColor);
  }

  return (
    <>
      <StatusBar backgroundColor={"#6A1B4D"} />
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity
         onPress={generateColor}
        >
          <View style={[styles.actionBtn]}>
            <Text style={[styles.actionBtnTxt]}>Change Color</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});



export default App;