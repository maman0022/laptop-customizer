import React from 'react';
import Specs from '../Specs/Specs'
import './MainForm.css'

export default function MainForm(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Specs USCurrencyFormat={props.USCurrencyFormat} state={props.state} updateFeature={props.updateFeature} store={props.store}/>
    </form>
  )
}