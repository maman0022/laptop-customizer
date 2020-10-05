import React from 'react';
import Option from '../Option/Option'
import Total from '../Total/Total'
import './MainSummary.css'

export default function MainSummary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Option USCurrencyFormat={props.USCurrencyFormat} state={props.state}/>
      <Total total={props.total} USCurrencyFormat={props.USCurrencyFormat}/>
    </section>
  )
}