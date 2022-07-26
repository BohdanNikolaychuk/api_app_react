import { useEffect, useState } from 'react';

export default function useVoitig() {
  const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';
  const [catUrl, setcatUrl] = useState('https://cdn2.thecatapi.com/images/429.jpg');
  const [catID, setcatID] = useState('');
  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
      params: { limit: 1, size: 'full' },
    });
    const data = await response.json();
    const catUrl = data[0].url;
    const catID = data[0].id;
    setcatUrl(catUrl);
    setcatID(catID);
    getVotes();
  }

  async function voteUp() {
    let body = {
      image_id: `${catUrl}`,
      sub_id: `${catID}`,
      value: 1,
    };
    const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': `${API}`,
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();
    await getApi();
    await getVotes();
  }

  async function voteDown() {
    let body = {
      image_id: catUrl,
      sub_id: catID,
      value: 0,
    };

    const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': `${API}`,
      },
      body: JSON.stringify(body),
    });

    const content = await rawResponse.json();
    await getApi();
    await getVotes();
  }

  async function voteLike() {
    let body = {
      image_id: catUrl,
      sub_id: catID,
      value: 3,
    };
    const rawResponse = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': `${API}`,
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();

    await getApi();
    await getVotes();
  }

  async function getVotes() {
    let response = await fetch('https://api.thecatapi.com/v1/votes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API}`,
        'x-api-key': `${API}`,
      },
    });
    const content = await response.json();
    setAllCats([...content].reverse());
  }

  return { catUrl, catID, allCats, voteDown, voteLike, voteUp };
}
