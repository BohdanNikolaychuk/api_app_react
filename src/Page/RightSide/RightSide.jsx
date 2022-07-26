import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Voting from '../Voting/Voting';
import Breed from '../Breed/Breeds';
import ImgSide from '../../Layout/ImgSide/ImgSide';
import Gallery from '../Gallery/Gallery';
const RightSide = () => {
  return (
    <Routes>
      <Route path="/" element={<ImgSide />} />
      <Route path="voting" element={<Voting />} />
      <Route path="pet" element={<Breed />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  );
};

export default RightSide;
