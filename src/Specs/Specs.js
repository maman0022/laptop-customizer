import React from 'react';
import Parts from '../Parts/Parts';
import './Specs.css';

export default function Specs(props) {
  return Object.keys(props.store.FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Parts store={props.store} feature={feature} USCurrencyFormat={props.USCurrencyFormat} state={props.state} updateFeature={props.updateFeature}/>
      </fieldset>
    );
  });
}