import React, { Component } from 'react';
import store from '../STORE';
import Nav from '../Nav/Nav';
import MainForm from '../MainForm/MainForm';
import MainSummary from '../MainSummary/MainSummary';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
export const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
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

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Nav />
        <main>
          <MainForm USCurrencyFormat={USCurrencyFormat} state={this.state} updateFeature={this.updateFeature} store={store}/>
          <MainSummary USCurrencyFormat={USCurrencyFormat} total={total} state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;