
// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import MovieThumb from './../MovieThumb';

import style from './style';

type Props = {
};
type State = {};

class MoviesList extends Component<Props, State> {

  renderMovieThumbNail = (item, index) => (
    <MovieThumb key={index} {...item} />
  );

  render() {
    const { data, loading } = this.props;
    if (loading) return <ActivityIndicator size="large" color="blue" />
    if (!data || !data.length) return null;
    return (
      <View style={style.container}>
        <ScrollView>
          {data.map(this.renderMovieThumbNail)}
        </ScrollView>
      </View>
    );
  }
}

export default MoviesList;
