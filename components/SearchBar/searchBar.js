import { View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function SearchBar() {
  return (
    <SafeAreaView style={styles.searchBar}>
    <View style={styles.searchBarLeft}>
      <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
      <TextInput
        style={styles.searchBarInput}
        placeholder="What do you want to eat?"
        placeholderTextColor="white"></TextInput>
      </View>
    <FontAwesomeIcon icon={faMicrophone} color="white" />
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  searchBar: {
    marginTop: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 20,
    backgroundColor: '#A6A6A6',
    color: 'white',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarInput: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBarText: {
    color: 'white',
    paddingLeft: 10,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
  },
})