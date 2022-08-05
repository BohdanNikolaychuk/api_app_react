import React from 'react';
import Input from '../../components/Input/Input';
import axios from 'axios';
//loading

import Loader from '../../components/Loader/Loader';
//
//img
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Bored } from '../../assets/bored.svg';
import { ReactComponent as Smile } from '../../assets/smile.svg';
import { ReactComponent as Like } from '../../assets/Like.svg';
//end img
import { Link } from 'react-router-dom';
import '../Voting/Voting.css';
//reduxtoolkit
import { axiosGetImg, axiosVoting } from '../../store/slices/catImgSlice';
import { useSelector, useDispatch } from 'react-redux';
const Voting = () => {
  const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';
  axios.defaults.headers.common['x-api-key'] = API;
  //reduxtoolkit
  const dispatch = useDispatch();
  const { imgURL, status, voting } = useSelector((state) => state.catImgSlice);
  console.log(imgURL);
  console.log(status);
  React.useEffect(() => {
    const load = async () => {
      await dispatch(axiosGetImg());
      await dispatch(axiosVoting());
    };
    load();
  }, [dispatch]);

  async function voteUp() {
    let body = {
      image_id: imgURL.url,
      sub_id: imgURL.id,
      value: 1,
    };
    /* eslint-disable no-unused-vars */
    let response = await axios.post('https://api.thecatapi.com/v1/votes', body);

    await dispatch(axiosGetImg());
    await dispatch(axiosVoting());
  }
  async function voteDown() {
    let body = {
      image_id: imgURL.url,
      sub_id: imgURL.id,
      value: 0,
    };
    /* eslint-disable no-unused-vars */
    let response = await axios.post('https://api.thecatapi.com/v1/votes', body);

    await dispatch(axiosGetImg());
    await dispatch(axiosVoting());
  }
  async function voteLike() {
    let body = {
      image_id: imgURL.url,
      sub_id: imgURL.id,
      value: 3,
    };
    /* eslint-disable no-unused-vars */
    let response = await axios.post('https://api.thecatapi.com/v1/votes', body);

    await dispatch(axiosGetImg());
    await dispatch(axiosVoting());
  }

  function renderState(sub_id, value) {
    if (value === 0) {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Image ID: {sub_id} was added to Dislikes</h3>
          <Bored fill="#FFD280" />
        </div>
      );
    } else if (value === 1) {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Image ID: {sub_id} was added to Likes</h3>
          <Smile fill="#97EAB9" />
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Image ID: {sub_id} was added to Favourites</h3>
          <Like fill="#FF868E" />
        </div>
      );
    }
  }

  return (
    <div className="voting">
      <Input />
      <div className="voting__info">
        <div className="main__btns">
          <Link to={{ pathname: '/' }} className="arrow__btn">
            <Arrow fill="white" />
          </Link>
          <button className="voting__btn">Voting</button>
        </div>
        {status === 'loading' ? (
          <Loader type="spin" color="#FBE0DC" height="65px" width="65px" />
        ) : (
          <img
            style={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '20px',
              width: '640px',
              height: '360px',
              maxHeight: '100%',
              maxWidth: '100%',
            }}
            src={imgURL.url}
            alt="cats"
          />
        )}
        <div className="choose__items">
          <div onClick={() => voteUp()} className="choose__item smile">
            <Smile fill="white" />
          </div>
          <div onClick={() => voteLike()} className="choose__item like">
            <Like fill="white" />
          </div>
          <div onClick={() => voteDown()} className="choose__item bored">
            <Bored fill="white" />
          </div>
        </div>
        {status === 'loading1' ? (
          <Loader type="spin" color="#FBE0DC" height="30px" width="30px" />
        ) : (
          <div className="show__panels">
            <div className="show">
              <div className="show__panel">
                {voting.map(({ id, created_at, sub_id, value }) => (
                  <div key={id}>
                    <p className="time">{new Date(created_at).toJSON().slice(11, 16)}</p>
                    <div>{renderState(sub_id, value)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
