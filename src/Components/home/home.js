import React, { PureComponent } from 'react'
import './home.css';

export default class home extends PureComponent {
  render() {
    return (
        <div style={{"text-align": "center"}} className="mt-3">
            <h1>
                Welcome!
            </h1>
            <img className="mt-3" width="300" alt="Angular Logo" src={require("./../../assets/images/toughviking.jpg")} />
        </div>
    )
  }
}
