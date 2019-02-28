#!/bin/bash
DIR=$1
COMPONENTNAME=$2
TESTFILENAME="$COMPONENTNAME.test.js"
COMPONENTFILENAME="$COMPONENTNAME.js"
STYLE_FILE_NAME="style.js"
INDEX_FILE_NAME="index.js"

cd $DIR
mkdir $COMPONENTNAME
cd $COMPONENTNAME
touch $INDEX_FILE_NAME
touch $STYLE_FILE_NAME
touch $COMPONENTFILENAME

echo "
export { default } from './$COMPONENTNAME';" > $INDEX_FILE_NAME

echo "
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
});" > $STYLE_FILE_NAME

echo "
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style from './style';

class $COMPONENTNAME extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>$COMPONENTNAME</Text>
      </View>
    );
  }
}

export default $COMPONENTNAME;" > $COMPONENTFILENAME

mkdir '__tests__'
cd '__tests__'
touch $TESTFILENAME

echo "
import React from 'react';
import { shallow } from 'enzyme';
import $COMPONENTNAME from './../$COMPONENTNAME';

describe('$COMPONENTNAME component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<$COMPONENTNAME {...props} />);

    expect(component).toMatchSnapshot();
  });
});" > $TESTFILENAME
