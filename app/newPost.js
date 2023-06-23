import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router'

export default function NewPost() {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const router = useRouter();

    const onPost = () => {
        console.log("post", text)
        setText('')
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={{margin:10}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} style={{ marginRight: 10 }} />
                <Text style={{ fontWeight: '500', fontSize: 20 }}>New Post</Text>
            </View>
            <TextInput
                placeholder='Compose new post...'
                value={text}
                onChangeText={setText}
                multiline
                numberOfLines={3}
            />
            <View style={{ marginVertical: 15 }}>
                <Feather name="image" size={24} color="black" onPress={pickImage} />
            </View>
            {image && <Image source={{ uri: image }} style={{ width: '100%', aspectRatio: 1 }} />}
            <Button title='Post' onPress={onPost} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})