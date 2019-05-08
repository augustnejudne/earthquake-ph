import React, { Fragment, useState } from 'react';

const Gmap = ({ data, setModal }) => {
  const { date, lat, lon, depth, mag, location } = data;
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>
      <div className="modal-bg" onClick={() => setModal(false)} />
      <div className="gmap">
        <button onClick={()=> setModal(false)} type="button" className="close close-button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="modal-info-container">
          <div className="table-container" style={{ background: 'white' }}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Date:</th>
                  <td>{date}</td>
                </tr>
                <tr>
                  <th>Latitude:</th>
                  <td>{lat}</td>
                </tr>
                <tr>
                  <th>Longitude:</th>
                  <td>{lon}</td>
                </tr>
                <tr>
                  <th>Depth:</th>
                  <td>{depth}</td>
                </tr>
                <tr>
                  <th>Magnitude:</th>
                  <td>{mag}</td>
                </tr>
                <tr>
                  <th>Location:</th>
                  <td>{location}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {loading && (
            <div className="loading">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <iframe
            src={`https://maps.google.com/maps?q=${lat}, ${lon}&z=7&output=embed`}
            className="gmapIframe"
            width="480"
            height="320"
            frameBorder="0"
            onLoad={() => setLoading(false)}
            style={{ border: 0 }}
            title="Gmap"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Gmap;
