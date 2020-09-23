import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import InputNumber from './components/input-number/input-number.component.jsx'

import './index.scss'

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);

  return (
    <div className="container">
      <InputNumber number={firstNumber} setNumber={setFirstNumber}/>
      <InputNumber number={secondNumber} setNumber={setSecondNumber}/>
      <InputNumber number={thirdNumber} setNumber={setThirdNumber}/>
    </div>
  )
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);