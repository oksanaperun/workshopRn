/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { AppRegistry } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import FeedScreen from './screens/Feed';
import LoaderDemoScreen from './screens/LoaderDemo';
import GalleryScreen from './screens/Gallery';

import MovieDetails from './components/MovieDetails/MovieDetails';

const HomeStack = createStackNavigator({
  Home: FeedScreen,
  MovieDetails: MovieDetails,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  ['Loader Demo']: LoaderDemoScreen,
  Gallery: GalleryScreen,
}, {
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
      },
      style: {
      },
    },
  });

AppRegistry.registerComponent('main', () => createAppContainer(TabNavigator));
