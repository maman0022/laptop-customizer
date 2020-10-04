import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'
import './MainSummary.css'

export default function MainSummary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <SummaryItem USCurrencyFormat={props.USCurrencyFormat} state={props.state}/>
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {props.USCurrencyFormat.format(props.total)}
        </div>
      </div>
    </section>
  )
}