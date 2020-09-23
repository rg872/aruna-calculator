import React, { useState } from "react";
import ReactDOM from "react-dom";

import InputNumber from "./components/input-number/input-number.component.jsx";
import CheckboxInputSelection from "./components/checkbox-input-selection/checkbox-input-selection.component.jsx";
import ButtonOperator from "./components/button-operator/button-operator.component";

import { operatorTypes } from "./utils/enum";

import "./index.scss";

function Calculator() {
  const [numberObjs, setNumberObjs] = useState([
    { value: 0, isChecked: false },
    { value: 0, isChecked: false },
    { value: 0, isChecked: false }
  ]);
  const [result, setResult] = useState(0);

  const getResult = selectedOperator => {
    const checkedIndexs = [];
    const checkCount = numberObjs.reduce((result, currentObj, index) => {
      if (currentObj.isChecked) {
        result += 1;
        checkedIndexs.push(index);
      }

      return result;
    }, 0);

    if (checkCount < 2) {
      alert("Please select at least 2 input");
    } else {
      setResult(calculateResult(selectedOperator, checkedIndexs));
    }
  };

  const calculateResult = (selectedOperator, checkedIndexs) => {
    return checkedIndexs.reduce((result, current, index) => {
      if (index === 0) {
        return Number(numberObjs[current].value);
      } else {
        switch (selectedOperator) {
          case "plus":
            result += Number(numberObjs[current].value);
            break;
          case "minus":
            result -= Number(numberObjs[current].value);
            break;
          case "times":
            result *= Number(numberObjs[current].value);
            break;
          case "divide":
            result /= Number(numberObjs[current].value);
            break;

          default:
            break;
        }

        return result;
      }
    }, 0);
  };

  const mutateNumberObj = (key, value, index) => {
    const newNumberObjs = [...numberObjs];
    newNumberObjs[index][key] = value;
    setNumberObjs(newNumberObjs);
  };

  return (
    <div className="container">
      <section>
        {numberObjs.map((numObj, index) => (
          <div className="input-wrapper" key={`input${index}`}>
            <InputNumber
              number={numObj.value}
              setNumber={value => mutateNumberObj("value", value, index)}
            />
            <CheckboxInputSelection
              isChecked={numObj.isChecked}
              setCheck={isChecked =>
                mutateNumberObj("isChecked", isChecked, index)
              }
            />
          </div>
        ))}
      </section>
      <section>
        <div className="operator-button-wrapper">
          {operatorTypes.map(type => (
            <ButtonOperator
              key={`button-${type}`}
              type={type}
              handleClick={getResult}
            />
          ))}
        </div>
      </section>
      <hr />
      <h3>RESULT {result}</h3>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
