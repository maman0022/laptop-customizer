import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav'

describe('Nav Component',()=>{
  it('the Nav with a h1 element',()=>{
    const wrapper=shallow(<Nav/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})