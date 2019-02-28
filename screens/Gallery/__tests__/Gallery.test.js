
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './../Third';

describe('Gallery component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Gallery {...props} />);

    expect(component).toMatchSnapshot();
  });
});
