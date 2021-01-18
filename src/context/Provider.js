import React from 'react';
import ContextCar from './ContextCar';

class Provider extends React.Component {
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
    }
    const { children } = this.props;
      return (
        <ContextCar.Provider value={value}>
          {children}
        </ContextCar.Provider>
      )
  }
}

export default Provider;