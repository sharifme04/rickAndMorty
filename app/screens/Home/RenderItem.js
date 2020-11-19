import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './Style';

const RenderItem = ({item, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() =>
      navigation.navigate('Details', {
        id: item.id,
        image: item.image,
        gender: item.gender,
        species: item.species,
        episode: item.episode,
      })
    }>
    <Image
      style={styles.image}
      source={{
        uri: `${item.image}`,
      }}
    />
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

export default RenderItem;
