import React, { useState } from 'react';
import WorldMap from '../map/map';
import Gallery from '../gallery/gallery';

const Home = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [countryClicked, setCountryClicked] = useState(null);

  const setMapClicked = () => {
    setMapOpen(true);
  };

  const setCountryClickedCB = countryCode => {
    setCountryClicked(countryCode);
  };

  const setGalleryClose = () => {
    setMapOpen(false);
    setCountryClicked(null);
  };

  return (
    <div>
      {!mapOpen && (
        <WorldMap
          onMapClicked={setMapClicked}
          onCountryClicked={setCountryClickedCB}
        />
      )}
      {countryClicked && mapOpen && (
        <Gallery
          countryClicked={countryClicked}
          isOpen={mapOpen}
          onGalleryClose={setGalleryClose}
        />
      )}
    </div>
  );
};

export default Home;
