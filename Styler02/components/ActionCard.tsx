import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native'

const { width } = Dimensions.get('window');


export default function ActionCard() {


    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }


    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
                </View>
                <Image
                    source={{ 
                        uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                     activeOpacity={0.7}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
                     activeOpacity={0.7}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
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
    card: {
        width: width - 32,
        height: 370,
        borderRadius: 6,
        margin: 16,
    },
    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
    },
})