
// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import MovieThumb from './../MovieThumb';

import style from './style';

type Props = {
};
type State = {};

class MoviesList extends Component<Props, State> {
  state = {
    page: 1,
  };

  renderMovieThumbNail = ({ item }, index) => (
    <MovieThumb key={item.imdbID} {...item} />
  );

  keyExtractor = (item, index) => item.imdbID;

  onEndReached = () => {
    this.props.loadMore();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          scrollable
          keyExtractor={this.keyExtractor}
          renderItem={this.renderMovieThumbNail}
          onEndReached={this.onEndReached}
        />
        </View>
    );
  }
}

export default MoviesList;
