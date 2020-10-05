import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainForm from './MainForm'

describe('MainForm Component', () => {
  it('the form renders with a header and reference to Specs component', () => {
    const wrapper = shallow(<MainForm/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})