import * as React from 'react';
import {
  FlatList,
} from 'react-native';

import recentMenu from '../DataMenu/recentMenu.json'

import ListItem from '../ListItem/ListItem';

export default HorizontalList = () => {

  return (
    <FlatList
      horizontal
      data={recentMenu["RecentMenu"]}
      keyExtractor={item => item.id}
      renderItem={ListItem}
    />
  );
};
