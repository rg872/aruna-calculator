import React from 'react';

import './checkbox-input-selection.component.scss'

export default function CheckboxInputSelection(props) {
  const { isChecked, setCheck } = props;

  return (
    <input type="checkbox" value={isChecked} onChange={(e) => setCheck(!isChecked)}/>
  )
}