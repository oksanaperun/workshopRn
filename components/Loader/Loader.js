import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import sharedStyle from './../../shared/style';

const loadingIcon = require('../../img/loading.png');

class Loader extends Component {
  rotate = new Animated.Value(0);

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.rotate.setValue(0);

    Animated.timing(this.rotate, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  render() {
    return (
      <Animated.View style={[
        sharedStyle.container,
      ]}>
        <Animated.Image
          source={loadingIcon}
          style={{
            height: 100,
            width: 100,
            transform: [{
              rotate: this.rotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              })
            }],
          }}
        />
      </Animated.View>
    );
  }
}

export default Loader;
