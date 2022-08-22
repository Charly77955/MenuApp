import { View, Text, Text } from 'react-native'
import React from 'react'

export default function searchBar() {
  return (
        <View>
        <TextInput
              style={styles.searchBarInput}
              placeholder="What do you want to eat?"
              placeholderTextColor="white">

              </TextInput>
            </View>
  )
}