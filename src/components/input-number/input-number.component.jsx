import React from "react";

import "./input-number.component.scss";

export default function InputNumber(props) {
  const { number, setNumber } = props;

  return (
    <input
      className="input-number"
      type="number"
      value={number}
      onChange={e => setNumber(e.target.value)}
    />
  );
}
