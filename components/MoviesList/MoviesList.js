import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import style from './style';

import MovieThumb from './../MovieThumb';

class MoviesList extends Component {
  state = {
    page: 1,
  };

  renderMovieThumbNail = ({ item }, index) => (
    <MovieThumb key={item.imdbID} onThumbPress={this.props.onThumbPress} {...item} />
  );

  keyExtractor = (item, index) => item.imdbID;

  onEndReached = () => {
    this.props.loadMore();
  }

  onRefresh = () => {
    this.props.refresh();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <View style={style.container}>
        <FlatList
          data={data}
          scrollable
          keyExtractor={this.keyExtractor}
          renderItem={this.renderMovieThumbNail}
          onEndReached={this.onEndReached}
          onRefresh={this.onRefresh}
          refreshing={loading}
        />
      </View>
    );
  }
}

export default MoviesList;
