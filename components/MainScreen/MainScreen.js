import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMicrophone,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import DisplayTrendingMenu from '../DisplayMenu/DisplayTrendingMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarLeft}>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
            <TextInput
              style={styles.searchBarInput}
              placeholder="What do you want to eat?"
              placeholderTextColor="white"></TextInput>
            </View>
          <FontAwesomeIcon icon={faMicrophone} color="white" />
        </View>
        <SafeAreaView>
          <Text style={styles.subtitle}>Trending</Text>
          <ScrollView horizontal={true}>
          <DisplayTrendingMenu/>
          </ScrollView>
          
        </SafeAreaView>
        <View>
          <Text style={styles.subtitle}>Recent</Text>
          
          
            <ScrollView  horizontal={true}>
            
            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#343840',
  },
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
  subtitle: {
    marginTop: 16,
    paddingVertical: 8,
    color: '#FF6E6E',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  dishes: {
    flexDirection: 'row',
    width: 200,
    height: 150,
    marginBottom: 10
  },
  // dish: {
  //   flexDirection: 'column',
  //   marginRight: 20,
  // },
  // foodRecentImage: {
  //   width: 150,
  //   height: 150,
  //   marginBottom: 10,
  // },
  foodText: {
    color: 'white',
    marginBottom: 20,
  },
});
