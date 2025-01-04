import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView, 
  Text, 
  View 
} from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'



export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text> Hello World ! </Text>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})