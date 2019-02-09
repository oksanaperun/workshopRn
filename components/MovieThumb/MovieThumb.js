
// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style from './style';

type Props = {
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
type State = {};

class MovieThumb extends Component<Props, State> {
  render() {
    const { Title } = this.props;
    return (
      <View style={style.container}>
        <Text>{Title}</Text>
      </View>
    );
  }
}

export default MovieThumb;
