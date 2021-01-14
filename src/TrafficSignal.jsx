// src/TrafficSignal.jsx

import React from 'react';
import ContextCar from './ContextCar';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <ContextCar.Consumer>
    {({ signal, changeSignal }) => (
      <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      {console.log(signal, changeSignal)}
      <img className="signal" src={renderSignal(signal.color)} alt="" />
    </div>
    )}
    </ContextCar.Consumer>
  );
};

export default TrafficSignal;
