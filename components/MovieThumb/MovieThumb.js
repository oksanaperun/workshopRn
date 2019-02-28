import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import sharedStyle from '../../shared/style';
import style from './style';

class MovieThumb extends Component {
  render() {
    const { Title, Year, Poster, imdbID } = this.props;

    return (
      <TouchableOpacity onPress={() => this.props.onThumbPress(imdbID)}>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{ uri: Poster }}
            resizeMode="contain"
          />
          <Text style={{...sharedStyle.text, ...style.text}}>{Title} ({Year})</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MovieThumb;
