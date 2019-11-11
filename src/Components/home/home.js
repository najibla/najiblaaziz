import React from 'react';
import WorldMap from '../map/map';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const setCountryClickedCB = countryCode => {
    history.push(countryCode);
  };

  return (
    <div>
      <WorldMap onCountryClicked={setCountryClickedCB} />
    </div>
  );
};
export default withRouter(Home);
