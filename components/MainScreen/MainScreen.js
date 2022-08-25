import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../SearchBar/searchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import DisplayMenu from '../DisplayMenu/DisplayMenu';
export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.trending = [];
    this.recent = [];
  }

  listData() {
    let count = Object.keys(this.data.Menu).length;
    for (let i = 0; i < count; i++) {
      if (this.data.Menu[i].tag == 'Recent')
        this.recent.push(this.data.Menu[i]);
      else this.trending.push(this.data.Menu[i]);
    }
  }

  render() {
    this.data = require('../DataMenu/Menu.json');
    this.listData();

    return (
      <View style={styles.container}>
        <SearchBar />
        <SafeAreaView>
          <Text style={styles.subtitle}>Trending</Text>
          <ScrollView horizontal={true}>
            <DisplayMenu menu={this.trending} />
          </ScrollView>
        </SafeAreaView>
        <View>
          <Text style={styles.subtitle}>Recent</Text>
          <ScrollView horizontal={true}>
            <DisplayMenu menu={this.recent} />
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
    marginBottom: 10,
  },
});
