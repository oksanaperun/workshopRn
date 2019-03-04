import React from 'react';
import { View, Text } from 'react-native';

import sharedStyle from './../../shared/style';

const LastUpdatedInfo = ({ lastRefresh }) => {
  return (
    <View>
      <Text style={sharedStyle.text}>
        Last updated at {lastRefresh.toLocaleString('en-GB', { hour12: false })}
      </Text>
    </View>
  );
};

export default LastUpdatedInfo;
