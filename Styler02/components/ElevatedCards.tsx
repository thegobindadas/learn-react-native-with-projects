import React from 'react'
import { 
    StyleSheet,
    ScrollView,
    Text, 
    View 
} from 'react-native'



export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView 
             style={styles.container} 
             horizontal={true} 
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ paddingRight: 16 }}
            >
                <View style={[styles.Card, styles.cardElevated,  { backgroundColor: '#5DA3FA' }]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.Card, styles.cardElevated, { backgroundColor: '#FAC858' }]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.Card, styles.cardElevated, { backgroundColor: '#5DA3FA' }]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.Card, styles.cardElevated, { backgroundColor: '#FAC858' }]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.Card, styles.cardElevated,  { backgroundColor: '#5DA3FA' }]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.Card, styles.cardElevated, { backgroundColor: '#FAC858' }]}>
                    <Text>Yellow</Text>
                </View>
            </ScrollView>
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
        padding: 8,
    },
    Card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
        marginRight: 8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})