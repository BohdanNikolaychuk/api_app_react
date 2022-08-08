import React from 'react';

const ListBreeds = (props) => {
  return (
    <select onChange={(event) => props.setCats(event.target.value)} className="list">
      <option defaultValue name="list">
        All breeds
      </option>
      {props.value.map((element) => (
        <option key={element.id} value={element.id} name="list">
          {element.name}
        </option>
      ))}
    </select>
  );
};

export default ListBreeds;
