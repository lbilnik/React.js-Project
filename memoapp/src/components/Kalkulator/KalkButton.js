import React from 'react';

import Header from '../Header'

class Button extends React.Component {
  kalkNumery = val => {
    return !isNaN(val) || val === '.' || val === 'C' ;
  };

  render () {
    return (
      <div 
      className={`button ${this.kalkNumery(this.props.children) ? "" : "numer"}`} 
      onClick={() => this.props.handleClick(this.props.children)}>               
         
         {this.props.children}
      </div>
    );
  }
}

export default Button;
