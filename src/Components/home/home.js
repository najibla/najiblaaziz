import React, { PureComponent } from 'react';

export default class home extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="mt-3">
        <h1>Welcome!</h1>
        <img
          className="mt-3"
          width="300"
          alt="Angular Logo"
          src={require('./../../assets/images/toughviking.jpg')}
        />
      </div>
    );
  }
}
