import React from 'react';

import Header from '../Header'

class ClearBtn extends React.Component {

  render () {
    return (
      <div className="clear-Btn" onClick={() => this.props.handleClear()}>               
        {this.props.children}
      </div>
    );
  }
}

export default ClearBtn;
