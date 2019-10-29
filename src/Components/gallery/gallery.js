import React, { useState, useEffect } from 'react';
import { ReactBnbGallery } from 'react-bnb-gallery';
import { getName } from 'country-list';
import './gallery.scss';

const Gallery = props => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dev.api.najiblaaziz.com/${props.countryClicked}`
      );
      res
        .json()
        .then(res => {
          res = res.map(({ src, thumbnail }) =>
            Object.assign({}, { photo: src, thumbnail: thumbnail })
          );
          setPhotos(res);
        })
        .catch(err => {
          setError(true);
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const toggleGallery = () => {
    props.onGalleryClose();
  };

  return error ? (
    <div className="coming-soon">
      Pictures from {getName(props.countryClicked)} Coming soon!
    </div>
  ) : !(props.countryClicked && photos.length) ? (
    <></>
  ) : (
    <div>
      <ReactBnbGallery show={true} photos={photos} onClose={toggleGallery} />
    </div>
  );
};

export default Gallery;
