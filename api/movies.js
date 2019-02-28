import axios from 'axios';
import { AsyncStorage } from 'react-native';

const apikey = '2f3933e4';
const baseUrl = `http://www.omdbapi.com/?apikey=${apikey}`;

export const fetchMovies = async (page, year) => {
  const searchQuery = `&s=*apple*`;
  const pageQuery = `&page=${page}`;
  const yearQuery = year ? `&y=${year}` : '';
  const response = await axios(`${baseUrl}${searchQuery}${pageQuery}${yearQuery}`);

  try {
    await AsyncStorage.setItem(baseUrl, JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }

  return response.data.Search;
};

export const getMovieDetails = async (imdbId) => {
  const response = await axios.get(`${baseUrl}&i=${imdbId}`);

  return response.data;
}
