import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function UserProfileHeader({ user, isSubscribed, setIsSubcribed }) {
    const router = useRouter();

    return (
        <View style={{}}>
            <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
                <View style={styles.overlay} />
                <SafeAreaView style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => router.back()} style={{ marginRight: 10 }} />
                    <View>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '500', marginBottom: 5 }}>{user.name}</Text>
                        <Text style={{ color: '#fff' }}>1.4K Posts · 64.3K Likes · 15.3 Fans</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: -50 }}>
                    <Image source={{ uri: user.avatar }} style={styles.userImage} />
                    <FontAwesome name="share-square-o" size={24} color="royalblue" />
                </View>
                <Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 5 }}>{user.name}</Text>
                <Text style={{ color: 'gray', marginBottom: 10 }}>@{user.handle}</Text>
                <Text style={{ lineHeight: 20 }}>{user.bio}</Text>
                <Text style={{ color: 'gray', marginTop: 20, fontWeight: 'bold' }}>SUBSCRIPTION</Text>
                <Pressable style={[styles.button, { backgroundColor: isSubscribed ? '#fff' : 'royalblue' }]} onPress={() => setIsSubcribed(!isSubscribed)}>
                    <Text style={[styles.buttonText, { color: isSubscribed ? 'royalblue' : '#fff' }]}>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</Text>
                    <Text style={[styles.buttonText, { color: isSubscribed ? 'royalblue' : '#fff' }]}>{user.subscriptionPrice === 0 ? 'FOR FREE' : `$${user.subscriptionPrice}/month`}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: 200,
        width: '100%'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 3,
        marginRight: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginVertical: 10
    },
    buttonText: {
        color: 'royalblue'
    }
})