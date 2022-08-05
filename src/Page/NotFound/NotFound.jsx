import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Loader from './../../components/Loader/Loader';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="arrow__btn">
        <Arrow fill="white" />
      </button>
      Not Found Go BAck
      <Loader />
    </div>
  );
};
export default NotFound;
