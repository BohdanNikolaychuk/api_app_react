import React from 'react';
import axios from 'axios';
import Input from '../../components/Input/Input';
import ListBreeds from '../../components/ListBreeds/ListBreeds';
import ListLimite from '../../components/ListLimite/ListLimite.jsx';
import { Link } from 'react-router-dom';

import '../Breed/Breeds.css';
import { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

//const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';
const options = [
  { value: '5', text: 'limit:5' },
  { value: '10', text: 'limit:10' },
  { value: '15', text: 'limit:15' },
  { value: '20', text: 'limit:20' },
];

const Breeds = () => {
  axios.defaults.headers.common['x-api-key'] = '3b937f44-90cd-4180-8a25-aced6a07e5fc';

  const [cats, setCats] = useState([]);

  const [limit, setLimit] = useState(options[0].value);

  const [breed, setBreed] = useState([]);

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const load = async () => {
      await getBreed();
      await searchByBreed();
    };
    load();
  }, [limit, cats]);

  // get all breeds
  async function getBreed() {
    try {
      let response = await axios.get('https://api.thecatapi.com/v1/breeds/');
      setBreed(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchByBreed() {
    try {
      let query_params = {
        breed_ids: cats,
        limit: limit,
      };
      let response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: query_params,
      });

      setKeys(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  //fill="#8C8C8C"
  return (
    <div className="breeds">
      <Input />
      <div className="breeds__info">
        <div className="main__btns">
          <Link to={'/'} className="arrow__btn">
            <Arrow fill="white" />
          </Link>
          <button onClick={searchByBreed} className="voting__btn">
            BREEDS
          </button>
          <ListBreeds setCats={setCats} value={breed} />
          <ListLimite setLimit={setLimit} limit={limit} options={options} />

          <button className="button__sort"></button>
          <button className="button__sort"></button>
        </div>
        <div className="all__contents">
          <div className="breeds__img">
            {keys.map((element, i) => (
              <img className={`div${i}`} key={element.id} src={element.url} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breeds;
