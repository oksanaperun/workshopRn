
import React from 'react';
import { shallow } from 'enzyme';
import Third from './../Third';

describe('Third component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Third {...props} />);

    expect(component).toMatchSnapshot();
  });
});
