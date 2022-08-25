import React from 'react';
import RecentMenu from '../DataMenu/recentMenu.json';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function DisplayRecentMenu() {
  const navigation = useNavigation();
  const tag = 'Recent';
  return (
    <View style={styles.DRMBody}>
      {RecentMenu.RecentMenu.map((item, i) => (
        <SafeAreaView key={i}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              navigation.navigate('DetailsScreen', {
                data: item,
                tag: tag,
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
  DRMBody: {
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
