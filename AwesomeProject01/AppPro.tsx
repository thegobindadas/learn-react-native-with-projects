import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    useColorScheme
} from 'react-native'


export default function AppPro() {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World !
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    }
})