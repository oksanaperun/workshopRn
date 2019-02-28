import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

import { getMovieDetails } from '../../api';
import Loader from '../Loader/Loader';

class MovieDetails extends Component {
  state = {
    loading: false,
    data: {},
  };

  componentDidMount() {
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    this.setState({ loading: true });

    const imdbId = this.props.navigation.getParam('imdbID');

    if (!imdbId) {
      return;
    }

    getMovieDetails(imdbId)
      .then(res => {
        this.setState({ data: res, loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, data } = this.state;
    const { Title, Year, Genre, Director, Plot, Poster } = data;

    if (loading) {
      return <Loader />;
    }

    return (
      <View style={style.container}>
        <Text style={{ ...sharedStyle.text, ...style.boldText }}>
          {Title} ({Year})
        </Text>
        <Image
          style={style.container}
          source={{ uri: Poster }}
          resizeMode="contain"
        />
        <Text>
          <Text style={{ ...sharedStyle.text, ...style.boldText }}>Genre: </Text>
          <Text style={sharedStyle.text}>{Genre}</Text>
        </Text>
        <Text>
          <Text style={{ ...sharedStyle.text, ...style.boldText }}>Director: </Text>
          <Text style={sharedStyle.text}>{Director}</Text>
        </Text>
        <Text>
          <Text style={{ ...sharedStyle.text, ...style.boldText }}>Plot: </Text>
          <Text style={sharedStyle.text}>{Plot}</Text>
        </Text>
      </View>
    );
  }
}

export default MovieDetails;
