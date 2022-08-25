import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DisplayTrendingMenu from '../DisplayMenu/DisplayTrendingMenu';
import SearchBar from '../SearchBar/SearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import DisplayRecentMenu from '../DisplayMenu/DisplayRecentMenu';
export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <SafeAreaView>
          <Text style={styles.subtitle}>Trending</Text>
          <ScrollView horizontal={true}>
            <DisplayTrendingMenu />
          </ScrollView>
        </SafeAreaView>
        <View>
          <Text style={styles.subtitle}>Recent</Text>
          <ScrollView horizontal={true}>
            <DisplayRecentMenu />
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
  }
});
