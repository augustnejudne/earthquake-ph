import React, { Fragment, useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Earthquake from './Earthquake';
import Gmap from './Gmap';
import earthquakeData from './earthquakeData';

const App = () => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    if (!modal) {
      setData(null);
      enableBodyScroll(body);
    } else {
      disableBodyScroll(body);
    }
  }, [modal, body]);

  return (
    <Fragment>
      <div className="container">
        {modal && <Gmap data={data} setModal={setModal} />}
        <h1 className="text-center mt-3">Philippine Earthquake Monitor</h1>
        <h5>Instructions:</h5>
        <p>
          Click on a row to view the location of the epicenter on google maps.
        </p>
        <div className="mb-3">
          
        <h5>Legend</h5>
        <div className="legend">
          <div>Intensity 1 - 2.9</div>
          <div>Intensity 3 - 4.9</div>
          <div>Intensity 5 - 5.9</div>
          <div>Intensity 6 and above</div>
        </div>
        </div>
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
            <th className="hide-column-on-mobile">Latitude</th>
            <th className="hide-column-on-mobile">Longitude</th>
            <th className="hide-column-on-mobile">Depth</th>
            <th>Mag</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {earthquakeData.map((d, i) => (
            <Earthquake
              key={i}
              data={d}
              setData={setData}
              setModal={setModal}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default App;
