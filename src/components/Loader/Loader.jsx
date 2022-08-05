import React from 'react';
import ReactLoading from 'react-loading';
const Loader = (props) => {
  const { type, color, height, width } = props;
  //FBE0DC
  //spin
  console.log(type);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '200px',
        maxHeight: '100%',
        maxWidth: '100%',
      }}>
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};

export default Loader;
