import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
import { getName } from 'country-list';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles({
  comingSoon: {
    textAlign: 'center',
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#6dc8cf',
    border: '3px solid black'
  }
});
const Photos = props => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { countryCode } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`https://dev.api.najiblaaziz.com/${countryCode}`);
      res
        .json()
        .then(res => {
          res = res.map(({ src, thumbnail }) =>
            Object.assign(
              {},
              {
                src,
                thumbnail
              }
            )
          );
          setPhotos(res);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          setError(true);
        });
    };
    fetchData();
  }, []);

  return error ? (
    <div className={classes.comingSoon}>
      Pictures from {getName(countryCode)} Coming soon!
    </div>
  ) : !loading ? (
    !(countryCode && photos.length) ? (
      <></>
    ) : (
      <Gallery
        backdropClosesModal={true}
        enableImageSelection={false}
        images={photos}
      />
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

export default Photos;
