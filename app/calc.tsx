'use client'

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [equation, setEquation] = useState<string>('');

  const updateEquation = (symbol: string) => {
    setEquation((equa) => equa + symbol);
  };

  const clearCalc = () => {
    setEquation('');
  }

  const solveEquation = () => {
    const result = eval(equation);

    if (!isFinite(result)) {
      setEquation("chyba")
    }
    else {
      setEquation(result.toString());
    }
  }

  return (
    <div className='calculator'>
      <div className='row'>
        <input
          type="text"
          id="result"
          className='result'
          value={equation}
          readOnly />

        <button className='buttonm' onClick={() => clearCalc()}>del</button>
      </div>

      <div className='row'>
        <button className='buttonm' onClick={() => updateEquation('7')}>7</button>
        <button className='buttonm' onClick={() => updateEquation('8')}>8</button>
        <button className='buttonm' onClick={() => updateEquation('9')}>9</button>
        <button className='buttonm' onClick={() => updateEquation('/')}>/</button>
      </div>

      <div className='row'>
        <button className='buttonm' onClick={() => updateEquation('4')}>4</button>
        <button className='buttonm' onClick={() => updateEquation('5')}>5</button>
        <button className='buttonm' onClick={() => updateEquation('6')}>6</button>
        <button className='buttonm' onClick={() => updateEquation('*')}>*</button>
      </div>

      <div className='row'>
        <button className='buttonm' onClick={() => updateEquation('1')}>1</button>
        <button className='buttonm' onClick={() => updateEquation('2')}>2</button>
        <button className='buttonm' onClick={() => updateEquation('3')}>3</button>
        <button className='buttonm' onClick={() => updateEquation('-')}>-</button>
      </div>

      <div className='row'>
        <button className='buttonm' onClick={() => updateEquation('0')}>0</button>
        <button className='buttonm' onClick={() => updateEquation('.')}>.</button>
        <button className='buttonm' onClick={() => solveEquation()}>=</button>
        <button className='buttonm' onClick={() => updateEquation('+')}>+</button>
      </div>
    </div>
  );

};

export default Calculator;