import React from 'react';
import TrendingMenu from '../DataMenu/Menu.json';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function DisplayTrendingMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.DTMBody}>
      {TrendingMenu.TrendingMenu.map((item, i) => (
        <SafeAreaView key={i}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              navigation.navigate('DetailsScreen', {
                data: item,
              });
            }}>
            <Image source={{uri: item.imagen}} alt="" style={styles.img} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  DTMBody: {
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
  },
  touch: {
    marginRight: 10,
  },
});
