import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'



export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}> Flat Cards </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headingText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: '#5DA3FA'
    },
    cardThree: {
        backgroundColor: '#50DBB4'
    }
})