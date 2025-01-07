import React from 'react'
import { 
    ScrollView,
    StyleSheet, 
    Text, 
    View,
    Image,
} from 'react-native'



export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];


    return (
        <View style={{marginTop: 20}}>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView 
             style={styles.container}
             scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl}) =>(
                    <View key={uid} style={styles.userCard}>
                        <Image
                        source={{
                            uri: imageUrl
                        }}
                        style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
        flex: 1,
        marginBottom: 20,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginHorizontal: 16,
        elevation: 2, // For shadow effect
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#075E54',
    },
    userStatus: {
        fontSize: 14,
        color: '#4a4a4a',
        marginTop: 4,
    },
})