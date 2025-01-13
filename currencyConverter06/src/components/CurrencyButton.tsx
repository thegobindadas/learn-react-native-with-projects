import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'


type CurrencyProps = PropsWithChildren<{
    name: string,
    flag: string
}>



export default function CurrencyButton(props: CurrencyProps): JSX.Element {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.countryName}>{props.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingVertical: 8,
    },
    flag: {
        fontSize: 32,
        marginBottom: 4,
        color: '#ffffff',
    },
    countryName: {
        fontSize: 16,
        color: '#dfe6e9',
        fontWeight: 'bold',
    },
})