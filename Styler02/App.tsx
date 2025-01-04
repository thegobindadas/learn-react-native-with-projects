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
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})