import React, { Component } from 'react';
import { View, Text } from 'react-native';

import sharedStyle from './../../shared/style';

class LastUpdatedInfo extends Component {
  render() {
    return (
      <View>
        <Text style={sharedStyle.text}>
          Last updated at {this.props.lastRefresh.toLocaleString('en-GB', { hour12: false })}
        </Text>
      </View>
    );
  }
}

export default LastUpdatedInfo;
