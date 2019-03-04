import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import sharedStyle from '../../shared/style';
import style from './style';

const posterPlaceholder = require('../../img/poster-placeholder.png');

const MovieThumb = ({ Title, Year, Poster, imdbID, onThumbPress }) => {
  return (
    <TouchableOpacity onPress={() => onThumbPress(imdbID)}>
      <View style={style.container}>
        <Image
          style={style.image}
          source={Poster === 'N/A' ? posterPlaceholder : { uri: Poster }}
          resizeMode="contain"
        />
        <Text style={{ ...sharedStyle.text, ...style.text }}>{Title} ({Year})</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MovieThumb;
