
import React from 'react';
import { shallow } from 'enzyme';
import Feed from './../Feed';

describe('Feed component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<Feed {...props} />);

    expect(component).toMatchSnapshot();
  });
});
