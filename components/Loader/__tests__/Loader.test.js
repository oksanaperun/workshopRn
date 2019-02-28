
import React from 'react';
import { shallow } from 'enzyme';
import Loader from './../Loader';

describe('Loader component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Loader {...props} />);

    expect(component).toMatchSnapshot();
  });
});
