import React, { Fragment, useState, useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import Earthquake from './Earthquake';
import Gmap from './Gmap';
import data from './earthquakeData';

const App = () => {
  const [loc, setLoc] = useState(false);
  const [modal, setModal] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    if (!modal) {
      setLoc(false);
      enableBodyScroll(body);
    } else {
      disableBodyScroll(body);
    }
  }, [modal, body]);

  return (
    <Fragment>
      <div className="container">
        {modal && <Gmap loc={loc} setModal={setModal} />}
        <h1 className="text-center mt-3">Philippine Earthquake Monitor</h1>
        <h5>Instructions:</h5>
        <p>
          Click on a row to view the location of the epicenter on google maps.
        </p>
        <h5>Legend</h5>
        <p>
          <div className="legend">
            <div>Intensity 1 - 2.9</div>
            <div>Intensity 3 - 4.9</div>
            <div>Intensity 5 - 5.9</div>
            <div>Intensity 6 and above</div>
          </div>
        </p>
        <h5>About:</h5>
        <p>
          The data on this page had to be scraped from
          https://earthquake.phivolcs.dost.gov.ph/ because I can't access
          Philippine National Seismic Network API. The data was scraped using
          NodeJS and CheerioJS. This page is built with ReactJS.
        </p>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr className="text-center">
            <th>Date</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Depth</th>
            <th>Magnitude</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <Earthquake key={i} data={d} setLoc={setLoc} setModal={setModal} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default App;
