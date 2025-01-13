import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { currencyByRupee } from "./constants"
import CurrencyButton from './components/CurrencyButton';

import Snackbar from 'react-native-snackbar';



function App(): React.JSX.Element {
  
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");


  const buttonPressed = (targetValue: Currency) => {

    if (!inputValue) {
      return Snackbar.show({
        text: "Enter Amount",
        backgroundColor: "#f0f0f0",
        textColor: "#000000",
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "Enter Valid Amount",
        backgroundColor: "#f0f0f0",
        textColor: "#000000",
        
      });
    }
  }


  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={10}
              value={inputValue}
              clearButtonMode='always' // only for ios
              onChangeText={setInputValue}
              style={styles.inputAmountField}
              keyboardType="numeric"
              placeholder="Enter Amount in Ruppes"
              placeholderTextColor="#808080"
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => buttonPressed(item)}
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.selected,
                ]}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});



export default App;