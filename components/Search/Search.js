import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import sharedStyle from '../../shared/style';
import style from './style';

class Search extends Component {
  state = {
    years: [],
  };

  currentYear = new Date().getFullYear();
  oldestYear = 1950;

  componentDidMount() {
    const generatedYears = [];

    for (let i = this.currentYear; i >= this.oldestYear; i--) {
      generatedYears.push(i);
    }

    this.setState({ years: generatedYears });
  }

  onValueChange = (itemValue) => {
    this.props.onYearChange(itemValue);
  };

  render() {
    const yearItems = this.state.years.map((year) => {
      return <Picker.Item key={year} value={year} label={year.toString()} />
    });

    return (
      <View>
        <Text style={style.text}>Select release year to filter out movies:</Text>
        <Picker
          selectedValue={this.props.selectedYear}
          style={style.yearPicker}
          onValueChange={this.onValueChange}>
          <Picker.Item value='' label='Any' />
          {yearItems}
        </Picker>
      </View>
    );
  }
}

export default Search;
