import React, { useEffect, useState } from 'react';

import './button-operator.component.scss'

export default function ButtonOperator(props) {
  const { type, handleClick } = props;
  const [symbol, setSymbol] = useState('');

  const operatorTypes = ['plus', 'minus', 'times', 'divide']
  const operatorSymbols = {
    plus: '+',
    minus: '-',
    times: 'x',
    divide: '/'
  }

  useEffect(() => {
    if(type && typeof type === 'string' && operatorTypes.findIndex((ot) => ot === type) !== -1) {
      setSymbol(operatorSymbols[type])
    }
  }, [symbol, type, operatorTypes, operatorSymbols])

  return (
  <button className="button-operator" onClick={() => handleClick(type)}>{ symbol }</button>
  )
}