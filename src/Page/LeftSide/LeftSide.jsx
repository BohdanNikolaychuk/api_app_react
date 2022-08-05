import React from 'react';
import './LeftSide.css';
import Cart from '../../components/Card/Card';
import { button } from './LeftSideInfo';

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <a className="logo" href="Logo">
        <img src="/Logo.svg" alt="" />
      </a>

      <h1>Lets start using The Cat API</h1>
      <div className="cards">
        {button.map((el) => (
          <Cart key={Math.random()} text={el} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
