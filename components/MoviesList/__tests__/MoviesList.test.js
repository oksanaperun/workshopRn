
import React from 'react';
import { shallow } from 'enzyme';
import MoviesList from './../MoviesList';

describe('MoviesList component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<MoviesList {...props} />);

    expect(component).toMatchSnapshot();
  });
});
