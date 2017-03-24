import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/components/App';

describe('<App />', ()=> {
  it('renders App component successfully', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });

  it('should have element with classname container', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('should have props for children defined', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.props).toBeDefined();
  });
});
