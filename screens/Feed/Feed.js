
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {};
type State = {};

class Feed extends Component<Props, State> {

  render() {
    return (
      <View style={sharedStyle.container}>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonLabel}>Find Stuff</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Feed;
