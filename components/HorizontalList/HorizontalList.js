import * as React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import ListItem from '../ListItem/ListItem';

export default HorizontalList = () => {
  const recentMenu = [
    {
      "id": "1",
      "name": "pozole",
      "imagen": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/pozol_LskhKImMVctRux2AQjTPirWZCUGJ76.png"
  },
  {
      "id": "2",
      "name": "carne en su jugo",
      "imagen": "https://cdn2.cocinadelirante.com/sites/default/files/images/2020/08/carne-en-su-jugo-para-4-personas.jpg"
  },
  {
      "id": "3",
      "name": "tacos de adobada",
      "imagen": "https://i.pinimg.com/originals/a4/7c/c6/a47cc65ac43865d14bf03a631a5991b5.jpg"
  },
  {
      "id": "4",
      "name": "sushi",
      "imagen": "https://images.hola.com/imagenes/cocina/recetas/20200408165233/maki-sushi-tempura-pollo/0-809-231/maki-sushi-pollo-m.jpg"
  },
  {
      "id": "5",
      "name": "torta ahogada",
      "imagen": "https://dam.cocinafacil.com.mx/wp-content/uploads/2017/03/torta-ahogada-.jpg"
  },
  {
      "id": "6",
      "name": "ramen",
      "imagen": "https://s1.eestatic.com/2016/11/15/cocinillas/cocinillas_170994703_116270236_1706x960.jpg"
  }
  ];

  return (
    <FlatList
      horizontal
      data={recentMenu}
      keyExtractor={item => item.id}
      renderItem={ListItem}
    />
  );
};
