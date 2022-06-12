import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color }) => (
    <ReactLoading type={type.balls} color={color.black} height={667} width={375} />
);
 
export default Loader;
