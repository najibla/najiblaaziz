import React, { useState } from 'react';
import WorldMap from '../map/map';
import Gallery from '../gallery/gallery';

const Home = () => {
  const [countryClicked, setCountryClicked] = useState(null);

  const setCountryClickedCB = countryCode => {
    setCountryClicked(countryCode);
  };

  const setGalleryClose = () => {
    setCountryClicked(null);
  };

  return (
    <div>
      {!countryClicked && <WorldMap onCountryClicked={setCountryClickedCB} />}
      {countryClicked && (
        <Gallery
          countryClicked={countryClicked}
          onGalleryClose={setGalleryClose}
        />
      )}
    </div>
  );
};

export default Home;
