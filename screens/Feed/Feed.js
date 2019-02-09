
// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {};
type State = {};

class Feed extends Component<Props, State> {

  render() {
    return (
      <View style={sharedStyle.container}>
        <Text style={sharedStyle.text}>Feed</Text>
      </View>
    );
  }
}

export default Feed;
