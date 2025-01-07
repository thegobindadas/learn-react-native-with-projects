import React from 'react';
import { 
    StyleSheet, 
    Image, 
    Text, 
    View, 
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');



export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                    <Text style={styles.cardDescription}>
                        The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                        red and pink sandstone, it is on the edge of the City Palace.
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    headingText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        width: width - 32,
        borderRadius: 8,
        marginBottom: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardImage: {
        height: 180,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 16,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#555555',
        fontSize: 14,
        marginBottom: 8,
    },
    cardDescription: {
        color: '#666666',
        fontSize: 12,
        marginBottom: 12,
    },
    cardFooter: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
