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
    data: [],
    page: 1,
    selectedYear: null,
    lastRefresh: null,
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    const { page, selectedYear, data } = this.state;

    this.setState({ loading: true });

    fetchMovies(page, selectedYear)
      .then(res => {
        this.setState({
          data: [...data, ...(res || [])]
        });
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadMore = () => {
    this.setState((state) => ({ page: state.page + 1 }), this.loadMovies);
  };

  onRefresh = () => {
    this.setState({ lastRefresh: new Date(), page: 1 });

    fetchMovies(this.state.page, this.state.selectedYear)
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => {
        console.error(err);
      });
  };

  openMovieDetails = (imdbID) => {
    this.props.navigation.navigate('MovieDetails', { imdbID });
  }

  loadMoviesByYear = (year) => {
    this.setState({ selectedYear: year, page: 1, data: [] }, this.loadMovies);
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
