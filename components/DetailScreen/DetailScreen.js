import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark, faShare, faHeart} from '@fortawesome/free-solid-svg-icons';

export class DetailsScreen extends Component {
  constructor() {
    super();
  }
  render() {
    this.food = this.props.route.params?.data;
    let image = {uri: this.food.imagen};
    //console.log(this.food);
    return (
      <View style={styles.body}>
        <View style={styles.topContainer}>
          <ImageBackground
            style={styles.imageBackground}
            source={image}
            imageStyle={{opacity: 0.7}}>
            <View style={styles.imageHero}>
              <View style={styles.flexRow}>
                <TouchableHighlight
                  style={styles.closeButton}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
                  <Text style={styles.closeButtonText}>
                    <FontAwesomeIcon icon={faXmark} color="white" />
                  </Text>
                </TouchableHighlight>
                <View style={styles.flexRow}>
                  <FontAwesomeIcon
                    icon={faShare}
                    color="white"
                    style={styles.marginRight}
                  />
                  <FontAwesomeIcon icon={faHeart} color="white" />
                </View>
              </View>
              <View style={styles.Titles}>
                <Text style={styles.textTag}>{this.food.tag}</Text>
                <Text style={styles.textTitle}>{this.food.name}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerTitles}>
            <Text style={styles.textIngedients}>Ingredients</Text>
            <Text style={styles.textServings}>
              for {this.food.servings} servings
            </Text>
          </View>
          <View>
            <ScrollView style={styles.TableContainer}>
              <View style={styles.table}>
                {this.food.ingredients.map(i => (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>{i[0]}</Text>
                    <Text style={styles.tableRowText}>{i[1]}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
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
  TableContainer: {
    height: '80%',
    padding: 10,
  },
  table: {
    flexDirection: 'column',
    justifyContent: 'space-around',
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
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginRight: {
    marginRight: 10,
  },
});
