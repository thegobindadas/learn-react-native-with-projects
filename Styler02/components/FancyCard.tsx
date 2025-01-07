import React from 'react'
import { 
    StyleSheet, 
    Dimensions,
    Image, 
    Text, 
    View 
} from 'react-native'

const { width } = Dimensions.get('window');


export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                    }}
                    style={styles.cradImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
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
        height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    cradImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }
})