import React from 'react';
import { shallow } from 'enzyme';
import Heatmap from './../src/components/heatmap';

describe('<Heatmap />', () => {
  it('renders one <Heatmap /> component', () => {
    const wrapper = shallow(<Heatmap />);
    console.log(wrapper.debug());
    expect(wrapper.exists()).toEqual(true);
  });
});