import React from 'react';
import ContextCar from './ContextCar';

class Provider extends React.Component {
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
    const { children } = this.props;
    const value = {
      cars: this.state.cars,
      moveCar: this.moveCar,
      signal: this.state.signal,
      changeSignal: this.changeSignal,
    }
    return (
      <ContextCar.Provider value={value}>
        {children}
      </ContextCar.Provider>
    );
  }
}

export default Provider;
