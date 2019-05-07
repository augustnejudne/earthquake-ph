import React  from 'react';

const Earthquake = ({ data, setData, setModal }) => {
  const { date, lat, lon, depth, mag, location } = data;

  const magCategory = () => {
    switch (true) {
      case (parseFloat(mag) < 3.0):
        return {background: '#ffbaba'};
      case (parseFloat(mag) >= 3.0 && parseFloat(mag) < 5.0):
        return {background: '#ff7b7b'};
      case (parseFloat(mag) >= 5.0 && parseFloat(mag) < 6.0):
        return {background: '#ff5252'};
      case (parseFloat(mag) >= 6.0):
        return {background: '#ff0000', color: 'white'};
      default:
        return null;
    }
  }

  const styles = magCategory();

  return (
    <tr style={{...styles, cursor: 'pointer'}} onClick={() => {
      setModal(true)
      setData(data);
    }}>
      <td>{date}</td>
      <td>{lat}</td>
      <td>{lon}</td>
      <td>{depth}</td>
      <td>{mag}</td>
      <td>{location}</td>
    </tr>
  );
};

export default Earthquake;