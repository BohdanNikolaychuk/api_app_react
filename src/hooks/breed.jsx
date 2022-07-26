import { useEffect, useState } from 'react';

export default function useBreed() {
  const options = [
    { value: '5', text: 'limit:5' },
    { value: '10', text: 'limit:10' },
    { value: '15', text: 'limit:15' },
    { value: '20', text: 'limit:20' },
  ];

  const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';

  const [cats, setCats] = useState([]);

  const [limit, setLimit] = useState(options[0].value);

  const [breed, setBreed] = useState('');

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    getBreed();
    getApi(limit);
  }, []);

  const setLimite = (event) => {
    setLimit(event.target.value);
    getApi(event.target.value);
    console.log(event.target.value);
  };
  const setBreeds = (event) => {
    setBreed(event.target.value);
    searchByBreed(event.target.value);
  };

  // get all breeds
  async function getBreed() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API}`,
        'x-api-key': `${API}`,
      },
    });
    const data = await response.json();
    setCats(data);
  }

  async function getApi(limit) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API}`,
        'x-api-key': `${API}`,
      },
    });
    const data = await response.json();
    setKeys(data);
    console.log(cats);
  }

  async function searchByBreed(breed_id) {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_id=${breed_id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API}`,
          'x-api-key': `${API}`,
        },
      },
    );
    const data = await response.json();
    setKeys(data);
  }
  return { options, cats, limit, keys, setBreeds, setLimite };
}
