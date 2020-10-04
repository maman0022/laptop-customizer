import React from 'react';
import FormItem from '../FormItem/FormItem'
import './MainForm.css'

export default function MainForm(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <FormItem USCurrencyFormat={props.USCurrencyFormat} state={props.state} updateFeature={props.updateFeature} store={props.store}/>
    </form>
  )
}