import React from 'react';
import { shallow } from 'enzyme';
import Main from './../src/components/main';

describe('<Main />', () => {
  it('renders one <Main /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.exists()).toEqual(true);
  });
});