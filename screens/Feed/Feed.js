
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {};
type State = {};

class Feed extends Component<Props, State> {
  state = {
    loading: false,
  };

  onButtonPress = () => {
    this.setState({ loading: true });
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={sharedStyle.container}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <TouchableOpacity
          onPress={this.onButtonPress}
          style={style.button}
        >
          <Text style={style.buttonLabel}>Find Stuff</Text>
        </TouchableOpacity>
      )}
      </View>
    );
  }
}

export default Feed;
