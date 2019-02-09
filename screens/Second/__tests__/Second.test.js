
import React from 'react';
import { shallow } from 'enzyme';
import Second from './../Second';

describe('Second component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Second {...props} />);

    expect(component).toMatchSnapshot();
  });
});
