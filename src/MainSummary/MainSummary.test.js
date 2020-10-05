import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainSummary from './MainSummary';
import { USCurrencyFormat } from '../App/App';

let total = 1523.66;

describe('MainSummary Component', () => {
  it('the summary renders with reference to Total and Option components component', () => {
    const wrapper = shallow(<MainSummary USCurrencyFormat = { USCurrencyFormat } total={total}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})