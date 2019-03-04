
import React from 'react';
import { shallow } from 'enzyme';
import Search from './../Search';

describe('Search component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Search {...props} />);

    expect(component).toMatchSnapshot();
  });
});
