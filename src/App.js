import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    );
  }
}

export default App;
