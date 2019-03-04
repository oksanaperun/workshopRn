
import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './../MovieDetails';

describe('MovieDetails component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<MovieDetails {...props} />);

    expect(component).toMatchSnapshot();
  });
});
