import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

import sharedStyle from '../../shared/style';
import style from './style';

const mediaPlaceholder = require('../../img/media-placeholder.jpg');

class Gallery extends Component {
  state = {
    image: null,
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'All',
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View style={sharedStyle.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <View style={style.container}>
            <Image
              style={style.image}
              source={image ? { uri: image } : mediaPlaceholder}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Gallery;
