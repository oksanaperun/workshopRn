import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

import { getMovieDetails } from '../../api';
import Loader from '../Loader/Loader';

const posterPlaceholder = require('../../img/poster-placeholder.png');
const boldTextStyle = { ...sharedStyle.text, ...style.boldText };

class MovieDetails extends Component {
  state = {
    loading: false,
    data: {},
  };

  componentDidMount() {
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    const imdbId = this.props.navigation.getParam('imdbID');

    if (!imdbId) {
      return;
    }

    this.setState({ loading: true });

    getMovieDetails(imdbId)
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
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
        <Text style={boldTextStyle}>
          {Title} ({Year})
        </Text>
        <Image
          style={style.container}
          source={Poster === 'N/A' ? posterPlaceholder : { uri: Poster }}
          resizeMode="contain"
        />
        <Text>
          <Text style={boldTextStyle}>Genre: </Text>
          <Text style={sharedStyle.text}>{Genre}</Text>
        </Text>
        <Text>
          <Text style={boldTextStyle}>Director: </Text>
          <Text style={sharedStyle.text}>{Director}</Text>
        </Text>
        <Text>
          <Text style={boldTextStyle}>Plot: </Text>
          <Text style={sharedStyle.text}>{Plot}</Text>
        </Text>
      </View>
    );
  }
}

export default MovieDetails;
