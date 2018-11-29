import React, { PureComponent } from 'react';

export default class home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }
  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(response => {
        this.setState({
          cats: response
        });
      });
  }
  render() {
    const { cats } = this.state;
    return (
      <div style={{ textAlign: 'center' }} className="mt-3">
        <h1 className="mb-3">I am a beautiful cat!</h1>
        {cats.map(item => (
          <img
            className="col-xs-12 col-sm-8 col-md-7"
            src={item.url}
            alt="cute cat"
            key={item.id}
          />
        ))}
      </div>
    );
  }
}
