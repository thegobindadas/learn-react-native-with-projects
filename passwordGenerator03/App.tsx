import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';


import BouncyCheckbox from "react-native-bouncy-checkbox"

//Form validation
import * as Yup from 'yup';
import { Formik } from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(8, 'Password must be at least 8 characters')
  .max(20, 'Password must be at most 20 characters')
  .required('Password is required'),
})


export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)


  const generateSecurePassword = (passwordLength: number) => {

    let validChars = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    
    if (upperCase) {
      validChars += upperCaseChars
    }

    if (lowerCase) {
      validChars += lowerCaseChars
    }

    if (numbers) {
      validChars += digitChars
    }

    if (symbols) {
      validChars += specialChars
    }

    
    const generatedPassword = generateRandomCharacters(validChars, passwordLength)
    setPassword(generatedPassword)
    setIsPassGenerated(true)
  }

  const generateRandomCharacters = ( characters: string, passwordLength: number) => {

    let tempPassword = ''
    for (let index = 0; index < passwordLength; index++) {
      const charIndex = Math.round(Math.random() * characters.length)
      tempPassword += characters.charAt(charIndex)
    }

    return tempPassword
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
  }


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generateSecurePassword(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                   style={styles.inputStyle}
                   value={values.passwordLength}
                   onChangeText={handleChange('passwordLength')}
                   placeholder='Ex. 8'
                   placeholderTextColor="#fff" 
                   keyboardType='numeric'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.checkboxHeading}>Include lowercase</Text>   
                  <View>              
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="#29AB87"
                    />  
                  </View>  
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.checkboxHeading}>Include uppercase</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={upperCase}
                      onPress={() => setupperCase(!upperCase)}
                      fillColor="#FED85D"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.checkboxHeading}>Include numbers</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.checkboxHeading}>Include special characters</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#FC80A5"
                    />
                  </View>
                </View>


                <View style={styles.formActions}>
                  <TouchableOpacity
                   disabled={!isValid}
                   style={[
                    styles.primaryBtn,
                    !isValid && styles.disabledPrimaryBtn,
                   ]}
                   onPress={() =>handleSubmit()}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                   style={[styles.secondaryBtn, styles.resetBtn]}
                   onPress={() => {
                    handleReset();
                    resetPasswordState()
                  }}
                  >
                    <Text style={[styles.secondaryBtnTxt, styles.resetBtnTxt]}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>🔒 Result:</Text>
            <Text style={styles.description}>Long Press to Copy</Text>

            <View style={styles.passwordContainer}>
              <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
              <TouchableOpacity onPress={() => Clipboard.setString(password)}>
                <Text style={styles.copyBtnTxt}>Copy</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    color: '#fff',
    borderColor: '#758283',
  },
  checkboxHeading: {
    color: '#FFFFFF',
    fontSize: 15,
    marginRight: 10,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  disabledPrimaryBtn: {
    backgroundColor: '#B0C4DE',
    shadowOpacity: 0,
    elevation: 0,
  },
  secondaryBtn: {
    width: 120,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#5DA3FA',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: '#5DA3FA',
    fontWeight: '700',
  },
  resetBtn: {
    width: 140,
    backgroundColor: '#FF6F61',
    borderColor: '#FF6F61',
    paddingVertical: 14,
  },
  resetBtnTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  passwordContainer: {
    backgroundColor: '#E0F7FA',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  generatedPassword: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00695C',
  },
  copyBtnTxt: {
    fontSize: 14,
    color: '#00796B',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});