import React from 'react';

import Header from '../Header'

class Inputs extends React.Component {
  kalkNumery = val => {
    return !isNaN(val) || val === '.';
  };


  render () {
    return (
      <div className="inputs">               
        {this.props.children}
      </div>
    );
  }
}

export default Inputs;
