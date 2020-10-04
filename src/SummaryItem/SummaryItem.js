import React from 'react';
import './SummaryItem.css'

export default function SummaryItem(props) {
  return Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.state.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
}