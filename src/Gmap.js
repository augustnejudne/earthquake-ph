import React, { Fragment } from 'react';

const Gmap = ({ loc, setModal }) => {
  return (
    <Fragment>
      <div className="modal-bg" onClick={()=>setModal(false)} />
      <div className="gmap">
        <button onClick={() => setModal(false)} className="close-button">&times;</button>
        <iframe
          src={`http://maps.google.com/maps?q=${loc.lat}, ${
            loc.lon
          }&z=7&output=embed`}
          width="480"
          height="320"
          frameBorder="0"
          style={{ border: 0 }}
          title="Gmap"
        />
      </div>
    </Fragment>
  );
};

export default Gmap;
