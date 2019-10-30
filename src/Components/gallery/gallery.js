import React, { useState, useEffect } from 'react';
import { ReactBnbGallery } from 'react-bnb-gallery';
import { getName } from 'country-list';
import './gallery.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import { textAlign } from '@material-ui/system';

const Gallery = props => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
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
  ) : !loading ? (
    !(props.countryClicked && photos.length) ? (
      <></>
    ) : (
      <div>
        <ReactBnbGallery show={true} photos={photos} onClose={toggleGallery} />
      </div>
    )
  ) : (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        margin: 'auto'
      }}
    >
      <CircularProgress color="primary" />
    </div>
  );
};

export default Gallery;
