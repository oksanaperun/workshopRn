
import React from 'react';
import { shallow } from 'enzyme';
import LoaderDemo from './../LoaderDemo';

describe('LoaderDemo component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<LoaderDemo {...props} />);

    expect(component).toMatchSnapshot();
  });
});
