import React from 'react'
import { 
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
} from 'react-native'


function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World ! </Text>
        <Text>This is my 1st React Native App</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid officia qui distinctio, neque alias esse et quae doloremque eveniet voluptatem? At laudantium harum natus? Id dolorem saepe alias accusamus.</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  )
}


export default App