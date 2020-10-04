import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormItem from './FormItem';
import { USCurrencyFormat } from '../App/App';

let state = {
  selected: {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    'Video Card': {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    }
  }
};

let updateFeature = null;

let store = {
  FEATURES: {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    ]
  }
}

describe('FormItem Component', () => {
  it('an array of form items renders with passed in dummy data', () => {
    const wrapper = shallow(<FormItem USCurrencyFormat={USCurrencyFormat} state={state} updateFeature={updateFeature} store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})