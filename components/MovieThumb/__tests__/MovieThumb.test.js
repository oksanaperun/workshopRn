
import React from 'react';
import { shallow } from 'enzyme';
import MovieThumb from './../MovieThumb';

describe('MovieThumb component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<MovieThumb {...props} />);

    expect(component).toMatchSnapshot();
  });
});
