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
        text: 'Please enter an amount',
        backgroundColor: '#333333',
        textColor: '#ffffff',
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
        text: 'Invalid amount entered',
        backgroundColor: '#ff5252',
        textColor: '#ffffff',
      });
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput
            style={styles.inputField}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="numeric"
            placeholder="Enter Amount in Rupees"
            placeholderTextColor="#aaa"
          />
        </View>
        {resultValue ? (
          <Text style={styles.resultText}>
            {resultValue} ({targetCurrency})
          </Text>
        ) : (
          <Text style={styles.infoText}>Choose a currency to convert</Text>
        )}
      </View>

      <FlatList
        data={currencyByRupee}
        keyExtractor={(item) => item.name}
        numColumns={3}
        contentContainerStyle={styles.currencyList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => buttonPressed(item)}
            style={({ pressed }) => [
              styles.currencyButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <CurrencyButton {...item} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 16,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    backgroundColor: '#333',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  rupee: {
    fontSize: 24,
    color: '#ffffff',
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    height: 48,
    color: '#ffffff',
    fontSize: 18,
    backgroundColor: '#333',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#aaa',
  },
  currencyList: {
    paddingBottom: 16,
  },
  currencyButton: {
    flex: 1,
    margin: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2d3436',
  },
  buttonPressed: {
    backgroundColor: '#00cec9',
  },
});



export default App;