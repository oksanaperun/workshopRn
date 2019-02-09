
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';

import MoviesList from './../../components/MoviesList';

import { fetchMovies } from './../../api';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {};
type State = {};

class Feed extends Component<Props, State> {
  state = {
    loading: false,
    data: null,
  };

  onButtonPress = () => {
    this.setState({ loading: true });
    
    fetchMovies()
      .then(res => {
        this.setState({ loading: false, data: res });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading, data } = this.state;

    return (
      <SafeAreaView style={sharedStyle.container}>
        {!data && !loading && (
          <TouchableOpacity
            onPress={this.onButtonPress}
            style={style.button}
          >
            <Text style={style.buttonLabel}>Find Stuff</Text>
          </TouchableOpacity>
        )}
        <MoviesList loading={loading} data={data} />
      </SafeAreaView>
    );
  }
}

export default Feed;
