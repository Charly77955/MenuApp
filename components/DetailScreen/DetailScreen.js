import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export class DetailsScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.topContainer}>
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../images/carne-en-su-jugo.jpeg')}
            imageStyle={{opacity: 0.7}}>
            <View style={styles.imageHero}>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableHighlight>
              <View style={styles.Titles}>
                <Text style={styles.textTag}>Tag Placeholder</Text>
                <Text style={styles.textTitle}>Title Placeholder</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerTitles}>
            <Text style={styles.textIngedients}>Ingredients</Text>
            <Text style={styles.textServings}>for Placeholder servings</Text>
          </View>
          <View>
            <Text style={styles.table}>ingredients Placeholder</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000000',
  },
  topContainer: {
    width: '100%',
    height: '50%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageHero: {
    height: '100%',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 30,
    height: 30,
    color: 'white',
  },
  closeButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  Titles: {},
  bottomContainerTitles: {
    flex: 1,
  },
  bottomContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: '#5E5E5E',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  bottomContainerText: {
    color: 'white',
  },
  textTag: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  },
  textTitle: {
    fontSize: 25,
    color: 'white',
    textTransform: 'capitalize',
  },
  textIngedients: {
    fontSize: 15,
    color: 'white',
    textTransform: 'capitalize',
  },
  textServings: {
    fontSize: 12,
    color: 'white',
  },
  table: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '80%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#948594',
    height: 30,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  tableRowText: {
    color: 'white',
  },
});
