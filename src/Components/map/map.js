import React, { useRef } from 'react';
import { VectorMap } from 'react-jvectormap';

const mapData = {
  AE: 7531,
  BE: 2981,
  CU: 200,
  CZ: 3815,
  DE: 2638,
  EE: 1868,
  EH: 2731,
  ES: 3508,
  FI: 9637,
  FR: 6803,
  GB: 7722,
  GR: 9521,
  HR: 6979,
  IN: 7367,
  IS: 666,
  IT: 6033,
  LB: 6972,
  LT: 3850,
  MA: 2731,
  MX: 5513,
  NL: 3426,
  PH: 7498,
  PL: 9945,
  PT: 8226,
  RU: 8772,
  SE: 4020,
  TH: 9599,
  TR: 9768,
  TZ: 5947,
  UA: 9276,
  US: 7803
};

const markers = [{ countryCode: 'MV', latLng: [3.2, 73.22], name: 'Maldives' }];

const Map = props => {
  const mapElement = useRef(null);

  const handleClick = (e, countryCode) => {
    const codeToNumber = countryCode;
    if (!isNaN(Number(countryCode))) {
      // marker item
      countryCode = markers[codeToNumber].countryCode;
    } else if (!mapData.hasOwnProperty(countryCode)) {
      // mapData item
      e.preventDefault();
      return;
    }
    props.onMapClicked(true);
    props.onCountryClicked(countryCode);
    setTimeout(() => {
      Array.from(document.getElementsByClassName('jvectormap-tip')).forEach(
        el => {
          el.style.display = 'none';
        }
      );
    }, 100);
  };

  return (
    <div>
      <VectorMap
        map={'world_mill'}
        ref={mapElement}
        backgroundColor="#6dc8cf" //change it to ocean blue: #0077be
        zoomOnScroll={true}
        regionsSelectable={false}
        markersSelectable={false}
        containerStyle={{
          width: '100%',
          height: '520px'
        }}
        onRegionClick={handleClick} //gets the country code
        onMarkerClick={handleClick}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 0.9,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 0
          },
          hover: {
            'fill-opacity': 0.5,
            cursor: 'pointer'
          },
          selected: {
            fill: '#2938bc' //color for the clicked country
          },
          selectedHover: {}
        }}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ['#146804', '#ff0000'], //your color game's here
              normalizeFunction: 'polynomial'
            }
          ]
        }}
        markerStyle={{
          initial: {
            fill: '#F8E23B',
            stroke: '#383f47'
          }
        }}
        markers={markers}
      />
    </div>
  );
};
export default Map;
