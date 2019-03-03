import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import sharedStyle from './../../shared/style';
import style from './style';

import { fetchMovies } from './../../api';
import MoviesList from './../../components/MoviesList';
import Search from '../../components/Search/Search';
import LastUpdatedInfo from '../../components/LastUpdatedInfo/LastUpdatedInfo';

class Feed extends Component {
  state = {
    loading: false,
    data: null,
    page: 1,
    selectedYear: null,
    lastRefresh: null,
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    this.setState({ loading: true });

    fetchMovies(this.state.page, this.state.selectedYear)
      .then(res => {
        if (this.state.data) {
          this.setState((state) => ({
            data: [...state.data, ...(res ? res : [])]
          }));
        } else {
          this.setState({ data: res });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  loadMore = () => {
    this.setState((state) => ({ page: state.page + 1 }), this.loadMovies);
  };

  onRefresh = () => {
    this.setState({ lastRefresh: new Date(), page: 1, data: null }, this.loadMovies);
  };

  openMovieDetails = (imdbID) => {
    this.props.navigation.navigate('MovieDetails', { imdbID });
  }

  loadMoviesByYear = (year) => {
    this.setState({ selectedYear: year, page: 1, data: null }, this.loadMovies);
  }

  render() {
    const { loading, data, lastRefresh, selectedYear } = this.state;

    return (
      <SafeAreaView style={style.safeArea}>
        <Search selectedYear={selectedYear} onYearChange={this.loadMoviesByYear}></Search>

        {lastRefresh && <LastUpdatedInfo lastRefresh={lastRefresh} />}

        {!data && !loading && <Text style={sharedStyle.text}>Sorry, no movies found...</Text>}

        <MoviesList
          data={data}
          loading={loading}
          loadMore={this.loadMore}
          refresh={this.onRefresh}
          onThumbPress={this.openMovieDetails}
        />
      </SafeAreaView>
    );
  }
}

export default Feed;
