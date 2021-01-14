import React from 'react';
import ContextCar from './ContextCar';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      }
    };
  };

  moveCar(car, side) {
    this.setState({ cars: { [car]: side }});
  }

  changeSignal(color) {
    this.setState({ signal: { color: color }})
  }


  render() {
    const value = {
      cars: this.state.cars,
      moveCar: this.moveCar,
      signal: this.state.signal,
      changeSignal: this.changeSignal,
    }
    return (
      <div className="container">
        <ContextCar.Provider value={value}>
          <Cars />
          <TrafficSignal />
        </ContextCar.Provider>
      </div>
    );
  }
}

export default App;
