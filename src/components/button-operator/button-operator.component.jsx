import React, { useEffect, useState } from "react";
import { operatorTypes, operatorSymbols } from "../../utils/enum";
import "./button-operator.component.scss";

export default function ButtonOperator(props) {
  const { type, handleClick } = props;
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    if (
      type &&
      typeof type === "string" &&
      operatorTypes.findIndex(ot => ot === type) !== -1
    ) {
      setSymbol(operatorSymbols[type]);
    }
  }, [symbol, type]);

  return (
    <button className="button-operator" onClick={() => handleClick(type)}>
      {symbol}
    </button>
  );
}
