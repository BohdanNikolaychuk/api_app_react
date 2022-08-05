import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bored } from '../../assets/bored.svg';
import { ReactComponent as Smile } from '../../assets/smile.svg';
import { ReactComponent as Like } from '../../assets/Like.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import '../Input/Input.css';
const Input = () => {
  return (
    <div>
      <div className="input">
        <form action="#">
          <input className="inputText" type="search" placeholder="Search for breeds by name" />
          <button className="btn" type="submit">
            <Search />
          </button>
        </form>
        <div className="buttons">
          <Link className="btn_nav" to={'like'}>
            <Smile fill="#FF868E" />
          </Link>
          <Link className="btn_nav" to={'like'}>
            <Like fill="#FF868E" />
          </Link>
          <Link className="btn_nav" to={'/like'}>
            <Bored fill="#FF868E" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Input;
