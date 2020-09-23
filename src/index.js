import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import InputNumber from './components/input-number/input-number.component.jsx'
import CheckboxInputSelection from './components/checkbox-input-selection/checkbox-input-selection.component.jsx'
import ButtonOperator from './components/button-operator/button-operator.component'

import './index.scss'

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [isFirstNumSelected, setFirstNumSelect] = useState(false);
  const [isSecondNumSelected, setSecondNumSelect] = useState(false);
  const [isThirdNumSelected, setThirdNumSelect] = useState(false);

  const operatorTypes = ['plus', 'minus', 'times', 'divide']

  const calculate = (selectedOperator) => {
    console.log('INI OPERATOR', selectedOperator)
  }

  return (
    <div className="container">
      <div className="input-wrapper">
        <InputNumber number={firstNumber} setNumber={setFirstNumber}/>
        <CheckboxInputSelection isChecked={isFirstNumSelected} setCheck={setFirstNumSelect}/>
      </div>
      <div className="input-wrapper">
        <InputNumber number={secondNumber} setNumber={setSecondNumber}/>
        <CheckboxInputSelection isChecked={isSecondNumSelected} setCheck={setSecondNumSelect}/>
      </div>
      <div className="input-wrapper">
        <InputNumber number={thirdNumber} setNumber={setThirdNumber}/>
        <CheckboxInputSelection isChecked={isThirdNumSelected} setCheck={setThirdNumSelect}/>
      </div>
      <div className="operator-button-wrapper">
        { operatorTypes.map(type => (
          <ButtonOperator key={type} type={type} handleClick={calculate}/>
        )) }
      </div>
    </div>
  )
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);