import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header'

describe('Header Component',()=>{
  it('the header with a h1 element',()=>{
    const wrapper=shallow(<Header/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})