import React from 'react';
import './App.css';
import ContextCar from './ContextCar';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.moveCar = this.moveCar.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
  }

  moveCar(car, side) {
    this.setState({ cars: { [car]: side }})
  }

  render() {
    const value = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };
    return (
      <ContextCar.Provider value={value}>
        <Cars />
      </ContextCar.Provider>
    );
  }
}

export default App;
