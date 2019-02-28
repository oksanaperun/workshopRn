
import React from 'react';
import { shallow } from 'enzyme';
import LastUpdatedInfo from './../LastUpdatedInfo';

describe('LastUpdatedInfo component', () => {
  let props = {};

  beforeEach(() => {
    props = {};
  });

  test('renders correctly', () => {
    const component = shallow(<LastUpdatedInfo {...props} />);

    expect(component).toMatchSnapshot();
  });
});
