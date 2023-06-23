import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import users from '../../assets/data/users'
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProfilePage() {
  const [isSubscribed, setIsSubcribed] = useState(false);

  const { id } = useSearchParams();

  const user = users.find(u => u.id === id)

  if (!user) {
    return <Text>User not found</Text>
  }

  if (!isSubscribed) {
    return (
      <View>
      <UserProfileHeader
        user={user}
        isSubscribed={isSubscribed}
        setIsSubcribed={setIsSubcribed}
      />
      <View style={{backgroundColor:'gainsboro', alignItems:'center', padding:20}}>
      <FontAwesome5 name="lock" size={50} color="gray" />
      <Text style={{backgroundColor:'royalblue', padding:15, height:50, borderRadius:25, overflow:'hidden', color:'#fff', margin:20}}>Subscribe to see user's posts</Text>
      </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            isSubscribed={isSubscribed}
            setIsSubcribed={setIsSubcribed}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})