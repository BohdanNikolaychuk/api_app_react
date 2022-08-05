import React from 'react';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
const Like = () => {
  return (
    <div>
      <Input />
      <div className="main__btns">
        <Link to={{ pathname: '/' }} className="arrow__btn">
          <Arrow fill="white" />
        </Link>
        <button className="voting__btn">Likes</button>
      </div>
    </div>
  );
};

export default Like;
