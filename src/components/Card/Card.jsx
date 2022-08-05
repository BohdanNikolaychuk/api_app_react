import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
const Card = ({ text }) => {
  return (
    <div className="Card">
      <div
        className="titleCard"
        style={{
          backgroundColor: text.color,
        }}>
        <img src={text.img} alt="" />
      </div>
      <NavLink to={text.to} className="buttonVote">
        {text.name}
      </NavLink>
    </div>
  );
};

export default Card;
