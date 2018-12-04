import React, { PureComponent } from 'react';

export default class home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      lastViewedImages: []
    };
  }

  componentDidMount() {
    this.loadNewImage();
  }

  getLastViewed = index => {
    fetch(`https://api.thecatapi.com/v1/images/${index}`)
      .then(response => response.json())
      .then(response => {
        this.setState(state => {
          return {
            cats: [response],
            lastViewedImages: [...state.lastViewedImages, response.id]
          };
        });
      });
  };

  loadNewImage = () => {
    console.log(this.state.lastViewedImages);
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(response => {
        this.setState(state => {
          return {
            cats: response,
            lastViewedImages: [...state.lastViewedImages, response[0].id]
          };
        });
      });
  };
  render() {
    const { cats, lastViewedImages } = this.state;
    return (
      <div style={{ textAlign: 'center' }} className="mt-3 mb-5">
        <h1 className="mb-3">Hello, I am a cat!</h1>
        {cats.map(item => (
          <div key={item.id}>
            <img
              className="col-xs-12 col-sm-8 col-md-7"
              src={item.url}
              alt="cute cat"
            />
            <div className="row mt-3 justify-content-center px-5">
              <div className="mr-5">
                <button
                  className="btn btn-primary"
                  style={{ margin: '0 auto' }}
                  href="#"
                  onClick={this.loadNewImage}
                >
                  Next image
                </button>
              </div>
              {lastViewedImages.length > 1 ? (
                <div className="">
                  <button
                    className="btn btn-primary"
                    style={{ margin: '0 auto' }}
                    href="#"
                    onClick={() =>
                      this.getLastViewed(
                        lastViewedImages[lastViewedImages.length - 2]
                      )
                    }
                  >
                    Previous image
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
