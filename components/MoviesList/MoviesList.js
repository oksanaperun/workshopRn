
// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import MovieThumb from './../MovieThumb';

import style from './style';

type Props = {
};
type State = {};

class MoviesList extends Component<Props, State> {

  renderMovieThumbNail = ({ item }, index) => (
    <MovieThumb key={index} {...item} />
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { data, loading } = this.props;
    if (loading) return <ActivityIndicator size="large" color="blue" />
    if (!data || !data.length) return null;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          scrollable
          keyExtractor={this.keyExtractor}
          renderItem={this.renderMovieThumbNail}
        />
        </View>
    );
  }
}

export default MoviesList;
